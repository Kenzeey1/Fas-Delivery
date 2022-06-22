export function SignInForm(str) {
    return "<link href=\"./src/Components/Form/form.css\" rel=\"stylesheet\">" +
        "<main class=\"form-signin mainform\">" +
        "<div class='login-error invalid-feedback' id='login-error' style='display:none, color: red'></div>"+
        "  <form id='signin-form' action='/connection' method='POST'>" +
        "    <img class=\"mb-4\" id=\"logo-form\" src=\"./src/images/"+str+"\" alt=\"\" width=\"72\" height=\"57\">" +
        "    <h1 class=\"h3 mb-3 fw-normal\">Please sign in</h1>" +
        "    <div class=\"form-floating\">" +
        "      <input name='email' type=\"email\" class=\"form-control\" id=\"floatingInputEmail\" placeholder=\"name@example.com\">" +
        "      <label for=\"floatingInputEmail\">Email address</label>" +
        "      <div class=\"invalid-feedback ifb-email\">" +
        "        Please type your email adress." +
        "      </div>"+
        "    </div>" +
        "    <div class=\"form-floating\">" +
        "      <input name=\"pwd\" type=\"password\" class=\"form-control-sm form-control\" id=\"floatingPassword\" placeholder=\"Password\">" +
        "      <label for=\"floatingPassword\">Password</label>" +
        "      <div class=\"invalid-feedback ifb-password\">" +
        "        Please type your password." +
        "      </div>"+
        "    </div>" +
        "    <button class=\"w-100 btn btn-lg btn-warning subButton noMobile\"  type=\"submit\">Sign in</button>" +
        "    <button class=\"w-100 btn btn-sm btn-dark subButton  mobile\"  type=\"submit\">Sign in</button>" +
        "    <p class=\"mt-5 mb-3 text-muted\">&copy; 2021–2022</p>" +
        "  </form>" +
        "<button class=\"w-100 btn btn-lg btn-secondary cf noMobile\" value=\"createNewaccount\" >Create new account</button>" +
        "<button class=\"w-100 btn btn-sm btn-secondary cf mobile\" value=\"createNewaccount\" >Create new account</button>" +
        "<img class=\"mb-4\" id=\"logo2\" src=\"./src/images/logo2.png\" alt=\"\" width=\"200\" height=\"150\">" +
        "</main>";
}

export function SignUpForm(str){
    return "<link href=\"./src/Components/Form/form.css\" rel=\"stylesheet\">" +
        "<main class=\"form-signin mainform\">" +
        "  <form id='signup-form' action='/inscription' method='POST' >" +
        "    <img class=\"mb-4\" id=\"logo-form\" src=\"./src/images/"+str+"\" alt=\"\" width=\"72\" height=\"57\">" +
        "    <h1 class=\"h3 mb-3 fw-normal\">Sign up, it's easy.</h1>" +
        "    <div class=\"form-floating row\">" +
        "      <div class=\"form-floating col\">"+
        "           <input name='name' type=\"name\" class=\"form-control\" id=\"floatingInputName\" placeholder=\"Jone\" >" +
        "           <label for=\"floatingInputName\" id='name'>Name</label>" +
        "           <div class=\"invalid-feedback ifb-name\">" +
        "               What's your name?" +
        "            </div>"+
        "       </div>"+
        "       <div class=\"form-floating col\">"+
        "           <input name='FN' type=\"FN\" class=\"form-control\" id=\"floatingInputFN\" placeholder=\"Doe\" >" +
        "           <label for=\"floatingInputFN\" id='firstname'>First name</label>" +
        "           <div class=\"invalid-feedback ifb-fname\">" +
        "               What's your first name?" +
        "            </div>"+
        "       </div>"+
        "    </div>" +
        "    <div class=\"form-floating\">" +
        "      <input name = 'email' type=\"email\" class=\"form-control\" id=\"floatingInputEmail\" placeholder=\"name@example.com\" >" +
        "      <label for=\"floatingInputEmail\">Email address</label>" +
        "      <div class=\"invalid-feedback ifb-email\">" +
        "        Please type your email adress." +
        "      </div>"+
        "    </div>" +
        "    <div class=\"form-floating\">" +
        "      <input name='PN' type=\"tel\" class=\"form-control\" id=\"floatingInputPN\" placeholder=\"0777777777\" >" +
        "      <label for=\"floatingInputPN\">Phone number</label>" +
        "      <div class=\"invalid-feedback ifb-pn\">" +
        "        Please type your email adress." +
        "      </div>"+
        "    </div>" +
        "    <div class=\"form-floating\">" +
        "      <input name='pwd' type=\"password\" class=\"form-control-sm form-control\" id=\"floatingPassword\" placeholder=\"Password\" >" +
        "      <label for=\"floatingPassword\">Password</label>" +
        "      <div class=\"invalid-feedback ifb-password\">" +
        "        Please type your password." +
        "      </div>"+
        "    </div>" +
        "    <button class=\"w-100 btn btn-lg btn-warning subButton noMobile\" type=\"submit\">Sign up</button>" +
        "    <button class=\"w-100 btn btn-sm btn-dark subButton mobile\"  type=\"submit\">Sign up</button>" +
        "    <p class=\"mt-5 mb-3 text-muted\">&copy; 2021–2022</p>" +
        "  </form>" +
        "<button class=\"w-100 btn btn-lg btn-secondary cf noMobile\" value=\"accesMyAccount\">Sign In</button>" +
        "<button class=\"w-100 btn btn-sm btn-secondary cf mobile\" value=\"accesMyAccount\" >Sign In</button>" +
        "<img class=\"mb-4\" id=\"logo2\" src=\"./src/images/logo2.png\" alt=\"\" width=\"200\" height=\"150\">" +
        "</main>";
}


