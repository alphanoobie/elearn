import React from "react";
import Link from "next/link";

export default function UserNav() {
  return (
    <div className="nav flex-column nav-pills mt-2">
      <link href="/user">
        <a className="nav-link active">Dashboard</a>
      </link>
    </div>
  );
}
