const {User} = require('../../app_api/models/user');



const register_get = (req, res) => {
    res.render('register', { title: 'Registration' });
};


const register_post = async (req, res)=> {
    const {username, password, email} = req.body;
    try {
        const user = new User({
            username: username,
            email: email,
            password: password
        })
        user.save();
        console.log(user);
        res.redirect('/')

        console.log('user created successfully');
        res.render('index', {title: 'Signin successfully'})
      
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}



const login_get = (req, res) => {
    res.render('login', { title: 'Login' });
};

const login_post = async(req, res)=>{
    const {username, email, password} = req.body;
    try {
      const user = await User.findOne({email});
      if(user){
        console.log(user)
        res.redirect('/login');
      } else {
        return res.send('User not found');
      }

    } catch(err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }



module.exports = {login_post, login_get, register_get, register_post};