let gators = [
  {name: "Elvis Vessley",
    hobbies: "surfing, dancing",
    weight: 865,
    likesIceCream: true,
    imgSource: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/10c413dcc4d444acbd6810f483028933"
  },{name: "Little Britches",
    hobbies: "shaking, eating fruit",
    weight: 361,
    likesIceCream: true,
    imgSource: "http://nebula.wsimg.com/5df260927e75521ad0f18fae842e522e?AccessKeyId=00569247111AAAE64481&disposition=0&alloworigin=1"
  },{name: "Wanda Snapson",
    hobbies: "having parties",
    weight: 712,
    likesIceCream: false,
    imgSource: "http://www.vaguebuttrue.com/images/1449775760-alligatorclimbsfenceWEBSITE.jpg"
  }
]

document.addEventListener("DOMContentLoaded", function(){

  let profileListings = new Vue({
    el: '#profileListings',
    data: {
      profiles: gators,
      iceCreamOnly: false
    },
    methods: {
      iceCreamFilter: function(){

        // if checkbox is checked
        console.log("Filtering now:");
        if(this.iceCreamOnly){
        this.profiles = gators.filter(function(element){
         return element.likesIceCream
        })
      } else{
      this.profiles = gators
      }
    }
    }
  })
})
