import User from "../models/user"
import queryString from 'query-string'
const stripe = require('stripe')(process.env.STRIPE_SECRET)

export const makeInstructor =async(req, res) => {
    try {
        // find user from db
    const user = await User.findById(req.auth._id).exec()
    //if user doesnt have stripe-account_id, create new
    if (!user.stripe_account_id){
        const account = await stripe.accounts.create({type:"standard"})
        // console.log('ACCOUNT =>', account.id)
        user.stripe_account_id = account.id
        user.save()
    }
    //create account link based on account id (from frontend to complete onboarding)
    let accountLink = await stripe.accountLinks.create({
        account: user.stripe_account_id,
        refresh_url: process.env.STRIPE_REDIRECT_URL,
        return_url: process.env.STRIPE_REDIRECT_URL,
        type: 'account_onboarding'
    })

    //prefill any info such as email(optional), send url response to frontend
    accountLink = Object.assign(accountLink,{
        "stripe_user[email]":user.email,
    })
    //then send the account link as response to frontend 
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`)
    } catch (err){
        console.log('make instructor error',err)
    }
}

export const getAccountStatus = async (req, res) => {
    try{
        const user = await User.findById(req.auth._id).exec()
        const account = await stripe.accounts.retrieve(user.stripe_account_id)
        // console.log('ACCOUNT ==>', account)
        if (!account.charges_enabled){
            return res.status(401).send('Unauthorized')
        } else {
            const statusUpdated = await User.findByIdAndUpdate(user._id, {
                stripe_seller: account,
                $addToSet: {role:'Instructor'}
            }, {new:true}).select('-password').exec()

            res.json(statusUpdated)
        }
        
    } catch(err){
        console.log(err)
    }
}