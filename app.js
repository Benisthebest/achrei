const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Question = require("./models/question");
const eSession = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views/partials"));
app.use(bodyParser.urlencoded({extended: true}));

const databaseUri = "mongodb+srv://admin:bennyis8@cluster0-qlf0x.mongodb.net/achrei";
mongoose.connect(databaseUri)
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));
      
app.use(eSession({
	secret: "Any Sentence you want",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

const isLoggedIn = (req, res, next) => {
   if (req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.get("/", (req, res)=>{
    res.redirect("/register");
});
//auth routes   
app.get("/register", (req, res)=>{
    res.render("register");
});

app.post("/register", (req, res)=>{
    User.register(new User({ username: req.body.username }), req.body.password, (err, user) =>{
	    if (err){
			return res.redirect("/register");
		}
		// authenticate user
		passport.authenticate('local')(req, res, ()=>{ res.redirect("/q1"); });
	});
});

app.get("/login", (req, res)=>{
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/q1",
	failureRedirect: "/login"
}), (req, res) => {
		
});

app.get("/q1", isLoggedIn, (req, res)=>{
    Question.findById("5aee1237282de607c5707650", (err, question)=>{
        if (err){
            console.log("Erorr getting all Q's:", err);
        } else{
            res.render("q1", {question: question}); 
        }
    });
});

app.post("/q1", (req, res)=>{
    Question.findById("5aee1237282de607c5707650", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
            Question.findById("5aee4ce6282de607c5707651", (err, question2)=>{
                if (err){
                    console.log("Error getting all Q's:", err);
                } else{
                    res.render("q2", {question2: question2}); 
                }
            });
        }
    });
});
app.post("/q2", (req, res)=>{
    Question.findById("5aee4ce6282de607c5707651", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
            Question.findById("5aee4ea4282de607c5707652", (err, question3)=>{
                if (err){
                    console.log("Error getting all Q's:", err);
                } else{
                    res.render("q3", {question3: question3}); 
                }
            });
        }
    });
});
app.post("/q3", (req, res)=>{
    Question.findById("5aee4ea4282de607c5707652", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
            Question.findById("5aee4f33282de607c5707653", (err, question4)=>{
                if (err){
                    console.log("Error getting all Q's:", err);
                } else{
                    res.render("q4", {question4: question4}); 
                }
            });
        }
    });
});
app.post("/q4", (req, res)=>{
    Question.findById("5aee4f33282de607c5707653", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
            Question.findById("5aee5008282de607c5707654", (err, question5)=>{
                if (err){
                    console.log("Error getting all Q's:", err);
                } else{
                    res.render("q5", {question5: question5}); 
                }
            });
        }
    });
});
app.post("/q5", (req, res)=>{
    Question.findById("5aee5008282de607c5707654", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
            Question.findById("5aee511a282de607c5707655", (err, question6)=>{
                if (err){
                    console.log("Error getting all Q's:", err);
                } else{
                    res.render("q6", {question6: question6}); 
                }
            });
        }
    });
});
app.post("/q6", (req, res)=>{
    Question.findById("5aee511a282de607c5707655", (err, question)=>{
        if (err){
            console.log("Erorr getting Q:", err);
        } else{
            // check user answer against question answer
            const userChoice = req.body.answer;
            if (question.answer === userChoice.toUpperCase()){
                User.findByIdAndUpdate(req.user._id, {
                    username: req.user.username,
                    points: req.user.points + 100
                }, (err, updatedUser)=>{
                    if (err){
                        console.log("Error updating user: ",err);
                    }
                });
            }
                User.find({},(err,users)=>{
                    if(err){
                        console.log(err);
                    } else {
                        res.render("results",{users:users}); 
                    }
                });
                    
                }
            });
        });

app.listen(process.env.PORT, process.env.IP);