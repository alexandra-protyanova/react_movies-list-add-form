(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),c=(i(14),i(8)),n=i(2),l=i(1),r=(i(15),i(9)),o=(i(16),i(17),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(r.a)({},e),e.imdbId)}))})},j=(i(19),function(e){var t=e.addMovie,i=Object(l.useState)(""),a=Object(n.a)(i,2),s=a[0],c=a[1],r=Object(l.useState)(""),m=Object(n.a)(r,2),d=m[0],j=m[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),u=h[0],p=h[1],g=Object(l.useState)(""),O=Object(n.a)(g,2),v=O[0],x=O[1],f=Object(l.useState)(""),M=Object(n.a)(f,2),w=M[0],N=M[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:s,description:d,imgUrl:u,imdbUrl:v,imdbId:w}),c(""),j(""),p(""),x(""),N("")},children:[Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Title",value:s,onChange:function(e){c(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Description",value:d,onChange:function(e){j(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"ImgUrl",value:u,onChange:function(e){p(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"ImdbUrl",value:v,onChange:function(e){x(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"input",type:"text",placeholder:"ImdbId",value:w,onChange:function(e){N(e.target.value)},required:!0}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"button",type:"submit",children:"Add new movie"})]})]})}),b=i(7),h=function(){var e=Object(l.useState)(b),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(j,{addMovie:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.706399e2.chunk.js.map