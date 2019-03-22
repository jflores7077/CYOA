const abc123 = {
  msg: "The story starts out in NY at the museum of History in Manhattan. The protagonist finds a map which seems to be blank to the eyes of other who see it. He however, can see it because he has the power to be able to see maps which are blank to everyone else. He finds a route to Miami Fl. And at the top of the map he sees a familiar figure that looks like a trident 🔱. He then makes a sketch of that map since he can’t take the one from the Museum. This map has coordinates which leads to an unknown location in Miami. ",
  options:{
    a:{
      msg:"You found a coin",
      info:"Go to the coordinates which were provided by the map.",
      options:{
        a:{
          msg:"the coin grew legs :o",
          info:"throw the coin",
        },
        b:{
          msg:"yum",
          info:"eat the coin",
        }
      }
    },
    b:{
      msg:"you stayed inside",
      info:"Stay in NY and continue your archeologist career.",
      options:{
        a:{
          msg:"you died in your sleep :(",
          info:"go zzz",
        },
        b:{
          msg:"the earbuds exploded in your ears. You died.",
          info:"listen to music",
        }
      }
    }
  }
}
