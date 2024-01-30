

describe(" login Test", function(){

  //it(" username test",function(){
     //cy.visit("http://127.0.0.1:5501/web.html")
     //cy.get("button").click()
     //cy.get('[type="text"]').type(" sneha")
     //cy.get ('.inp_2').type("987456")
     //cy.get ('#sub_btn')

 // })

//implicite assertions
//1:should
//2:and

it("test- implicit assertion",()=>{
  //cy.visit("http://127.0.0.1:5501/web.html")
  //cy.url().should('not.eq','http://127.0.0.1:5501/web.html/cars')
   //cy.url().should('contain',"web")
   //cy.url().should('include',":web.html")


   //cy.visit("http://127.0.0.1:5501/web.html")
   //cy.url().should('not.eq','http://127.0.0.1:5501/web.html/cars')
   //.should('contain',"web")
   //.should('include',":web.html")

   cy.visit("http://127.0.0.1:5501/web.html")
   cy.url().should('not.eq','http://127.0.0.1:5501/web.html/cars')
   .and('contain',"web")
   .and('include',":web.html")


  
})

})


  

  

// describe = test-suite( collection of test)
//it = test case
//