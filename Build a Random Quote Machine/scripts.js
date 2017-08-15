//APP CONTROLER

var controller = (function(){

  document.querySelector('.add__btn').addEventListener('click',function(){
          
      //Generate a radom number
      
      var num = Math.floor((Math.random() * 7) );
      
      //Associate the number to the correspondent quote 
      
      var printQuote = getQuote(num);
      
      //Display the quote
      
      document.getElementById('h1_quote').textContent = printQuote;
      
  });
  
    var getQuote = function(val){

        var arrayQuotes = [ 
            "Great things in business are never done by one person. They're done by a team of people.", 
            "Innovation distinguishes between a leader and a follower.",
            "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
            "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
            "Design is not just what it looks like and feels like. Design is how it works.",
            "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
            "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
            "The reason that Apple is able to create products like the iPad is because we've always tried to be at the intersection of technology and the liberal arts."
        ];
        return arrayQuotes[val];
    };

    // API twitter
    document.querySelector('.btn_tweet').addEventListener('click',function(){

            var url = "https://twitter.com/intent/tweet";
            var text = document.getElementById('h1_quote').textContent;
            var hashtags = "Just, testing";
            var via="userName";
            //My own line 
            window.open(url+"?text="+text+"","","width=450","heiht=100");        
/* Line of the original API
        
            window.open(url+"?text="+text+";hashtags="+hashtags+";via="+via,"","width=500,heiht=300");
*/

      });    
        
       
})();




//var a = document.getElementById("#but").textContent;

//var a = document.getElementById('teste').insertAdjacentHTML('beforeend', '<h1> NEW QUOTE!!!!</h1>');

//document.getElementById('but').textContent = 'NEW QUOTE!!!!';

//document.addEventListener()


//document.querySelector(DOMstring.budgetLabel).textContent = obj.budget;


//
//document.querySelector('.add__btn').addEventListener('click',function(){
//       
//    console.log("TESTE");
//    //document.getElementById('h1_quote').textContent = 'NEW QUOTE!!!!'; 
//    
//});
//

//UI CONTROLER

/*var UIController = (function(){
    
    return {
      get  
        
    };
    
    
})();


//APP CONTROLER

var controller = (function(UICrtl){
    
  document.querySelector('.add__btn').addEventListener('click',function(){
          
      //Generate a radom quote
      
      //Add this quote on UIControler
      
      //Display the quote
      
      
      document.getElementById('h1_quote').textContent = 'NEW QUOTE!!!!';
      
      console.log("Buton!!!");
      

  });
       
})(UIController);*/