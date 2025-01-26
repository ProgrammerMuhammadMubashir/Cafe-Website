import express from "express";
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";

const adminloginfunc = async (req, res) => {
    let { emailofadmin, passwordofadmin } = req.body;

    if (emailofadmin === process.env.ADMIN_EMAIL) {
        const isPasswordMatch = await bcrypt.compare(passwordofadmin, process.env.ADMIN_PASSWORD);
        if (isPasswordMatch) {
            req.session.signin="Signindone"
            res.redirect("/admindashboard");
        

        } else {
            res.render("adminlogin.ejs", { msg: "Wrong password!" });
        }
    } else {
        res.render("adminlogin.ejs", { msg: "Wrong email!" });
    }
};

export default adminloginfunc;
