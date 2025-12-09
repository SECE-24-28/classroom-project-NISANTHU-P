import React from "react";
import { Outlet } from "react-router-dom";
import { HelloWorldStyle } from "./hello-world-style.js";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
        <div className="com">
        <h1>Welcome to Sri Eshwar</h1>
        <br />
        <form action="">
      <p>Select your language</p>
      <input type="radio" id="css" value="CSSAT" name="SelectLanguage" />
      <label for="css">CSS</label>
      <input type="radio" id="html" value="HTML" name="SelectLanguage" />
      <label for="html">HTML</label>
      
<br />
<br />
      <label for="name">Name</label>
      <input type="text" id="name" minlength="5" maxlength="100" required /><br /><br />
      <label for="email">Email</label>
      <input type="email" id="email" maxlength="100" /><br /><br />
      <label for="Mobile">Mobile</label>
      <input type="number" id="Mobile" pattern="[0-9]{10}" /><br /><br />

      <button type="submit">Submit</button>
    </form>
      <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
    <a href="https://www.google.com/" target="_blank">Google</a>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th colspan="2">Name</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>Naveen</td>
        <td>Kumar</td>
        <td>abc,xyz</td>
      </tr>
    </table></div>
    <Outlet />
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;