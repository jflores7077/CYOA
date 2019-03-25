const abc123 = {
  msg: "On a summer day in 2016, at the museum of History in Manhattan, New York. John looks around the museum and goes to the archaeological area where he finds a map which seems to be blank to the eyes of other who see it. He however, can see it because he has the power to be able to see empty maps or so what they seem to everyone else. He finds a route to Miami Fl. And at the top of the map he sees a familiar figure that looks like a trident . He then makes a sketch of that map since he can’t take the one from the Museum. This map has coordinates which leads to an unknown location in Miami.",
  options:{
    a:{
      msg:"John decides to travel to the coordinates that were provided by the map. The coordinates leas to a city in Miami. He books a flight to Miami and goes to Islamorada, an island in the Florida Keys, where the coordinates had pointed out. He then begins to ask the locals around if they have heard anything or know anything about a trident that has been missing for millennia and which is also mention in many ancient books, the “water bender” the historians called it.  A local hermit tells the story of the trident. He told a story of how the trident was broken into 4 parts, each hidden in a secret location and guarded by 4 guardians. The pieces could be only found using a Until John found the coordinates on the map he could only see. The hermit tells him that he has encountered people who were looking for the trident before, a young couple, over 30 years ago. John suspected that it might have been his parents who were looking for the trident as well. John admits that he lost his parents 30 years ago. The hermit recognizes the resemblance and reveals himself as one of the guardians of the trident. He explains the story of how John’s parents had once defended him from others who seeked the trident. He gives him a piece of the trident, however he warns John about the true power of the trident and stated, “The one who wields the trident, controls the seas.” Once he receives the piece of the trident, 2 other coordinates were marked on the map, one on the island of Bermuda, and the other in Puerto ",
      info:"Go to the coordinates which were provided by the map",
      options:{
        a:{
          msg:"John goes to the island of Bermuda, where he encounters his best friend, James Jameson, on vacation. After a small conversation, they are suddenly attacked a mysterious group of black hooded figures. John and James were able to defeat the hooded figures. As James tries to interrogate the hooded figures, they took out a piece of gum, which kills them instantly with foam coming out of their mouths. Finding no answers, they head to the exact location on the map, which leads them to Crystal Cave. As they walk further inside, the trident piece began to glow brighter. They reach to an area that prevents the public from going further. The piece started to glow even brighter and the small waterfall inside began to stop flowing, revealing a hidden door with the symbol of the trident on it. They head inside, finds the piece and more hooded figures appear and steal the piece of the trident. After the hooded figures stole the piece, the cave starts to overflow with water. The heroes escape the flooding cave. When they finally escaped outside, John noticed that one of the hooded figures had dropped a pack of gum. The pack of gum reads, Trident, which John found peculiar. Inside the pack of gum, he starts to see more coordinates to another location. James says that they should head to the police station. John has to make a decision.",
          info:"Go to Bermuda",
          options: {
            a:{
              msg:"John and James heads to a local police station. Inside, they file a report and informed the police officers about the pack of gum they had found. Suddenly, the police officers detained both of them. The police officers then called someone on the phone. James, who happens to know every single language, was able to understand the conservation the police officers were having. James whispers the conservation to John and formulates a plan. John noticed that there is a small very eroded lock that is keeping the door locked and also has a small knife that he has inside his boot. He figures he could chip the lock to unlock the door and escape. James insisted that they should not do anything as they have a risk of getting killed",
              info:"Go to the police station",
              options:{
                a:{
                  msg:"John starts chipping away the lock with his small knife. He is successfully escapes the cell, but is met with 4 armed police guards who opened fire on John. You died.",
                  info:"Chip the lock and escape"
                }
              },
              b:{
                //inside his
                msg:"John and James head to the location that was marked inside the gum pack.  The location leads them to Deerfield, Illinois, home to the headquarters of Mondelez International. John and James tries to to sneak inside of the building but then were captured by armed guards and were placed hood upon them and brought into a room.The armed guards removed their hoods and warmly greeted by a man who introduced himself as Dirk Van de Put, CEO of Mondelez International and revealed the location they were kept as the headquarters of Mondelez International. The man revealed to be his John's true father. Dirk coldly addresses John as nothing but a mistake. Dirk then explains why John and James are captured. Mondelez International is the company that owns the gum brand, Trident. Dirk saw that his gum brand had to be the best gum in the world and would not stand for any competition. His plan for the Trident was to use it to wipe out any competition that stood in his way and rule the world with gum and he was not going to let someone ruin his plan. He then orders the guards to execute both John and James. John tries to explain to Dirk that he’s the only one that can find the last piece of the Trident, with him having the ability to read the map and his only demand was to allow James to live. Dirk reluctantly accepts the agreement. He then has his men to untie John but not James and have them bring in the 3 pieces of the trident and the ancient map. As the the 3 pieces are brought together, they began to shine to from the location they were found in to the very center of the 3 points, the center of the Bermuda Triangle. Legends had it that ships that travel through the Bermuda Triangle were lost and never to seen again, which could explain why the island of Atlantis could not be found. Dirk then orders his men to take John and James with him to the location. As they sail towards the Bermuda Triangle, mist began to roll out and, the pieces began to act as a compass and point the ship towards the island.They reached the island and at the center lies the final piece of the Trident. Giggling with joy, Dirk walked carelessly to the center and grabbed the piece of the Trident. As he does this, water began to burst from the ground. Dirk quickly runs back and the pieces magnetically form together into the Trident and the water stopped flowing. Dirk holds the Trident in the air and laughs maniacally. John takes this chance to cut himself free of his bonds with his knife he still had inside his boot and frees James as well. ",               
                info:"Go to the location marked on the pack of gum.",
                options:{
                  b:{
                    msg:"John charges at Dirk and tries to pull away the Trident from him. John is able to take away the Trident from Dirk and feels the immense power flowing from the Trident. Dirk tries to tempt John into giving in and use the powers of the Trident for himself.",
                    info:"Attack Dirk",
                    options:{
                      a:{
                        msg:"John goes mad with power with the Trident. He takes over the world and becomes the ruler of Earth and eventually leads to the destruction of the planet with the Trident's destructive powers. THE END",
                        info:"Use the powers for yourself",
                      },
                      b:{
                       msg:"",
                       info:"Don't give in to the power"
                     } 
                    }
                  }
                }
              }
            },
            b:{
              msg:"John and James head to the location that was marked inside the gum pack.  The location leads them to Deerfield, Illinois, home to the headquarters of Mondelez International. John and James tries to to sneak inside of the building but then were captured by armed guards and were placed hood upon them and brought into a room.The armed guards removed their hoods and warmly greeted by a man who introduced himself as Dirk Van de Put, CEO of Mondelez International and revealed the location they were kept as the headquarters of Mondelez International. The man revealed to be his John's true father. Dirk coldly addresses John as nothing but a mistake. Dirk then explains why John and James are captured. Mondelez International is the company that owns the gum brand, Trident. Dirk saw that his gum brand had to be the best gum in the world and would not stand for any competition. His plan for the Trident was to use it to wipe out any competition that stood in his way and rule the world with gum and he was not going to let someone ruin his plan. He then orders the guards to execute both John and James. John tries to explain to Dirk that he’s the only one that can find the last piece of the Trident, with him having the ability to read the map and his only demand was to allow James to live. Dirk reluctantly accepts the agreement. He then has his men to untie John but not James and have them bring in the 3 pieces of the trident and the ancient map. As the the 3 pieces are brought together, they began to shine to from the location they were found in to the very center of the 3 points, the center of the Bermuda Triangle. Legends had it that ships that travel through the Bermuda Triangle were lost and never to seen again, which could explain why the island of Atlantis could not be found. Dirk then orders his men to take John and James with him to the location. As they sail towards the Bermuda Triangle, mist began to roll out and, the pieces began to act as a compass and point the ship towards the island.They reached the island and at the center lies the final piece of the Trident. Giggling with joy, Dirk walked carelessly to the center and grabbed the piece of the Trident. As he does this, water began to burst from the ground. Dirk quickly runs back and the pieces magnetically form together into the Trident and the water stopped flowing. Dirk holds the Trident in the air and laughs maniacally. John takes this chance to cut himself free of his bonds with his knife he still had inside his boot and frees James as well. ",
              info:"Go to the location marked on the pack of gum.",
              options:{
                a:{
                  msg:"John and James successfully escapes the clutches of Dirk, but failed to stop him from the ruling the world with the Trident at hand. The gum brand Trident became the number one gum product in the world.",
                  info:"Escape the Island",
                  
                },
                b:{
                  msg:"John charges at Dirk and tries to pull away the Trident from him. John is able to take away the Trident from Dirk and feels the immense power flowing from the Trident. Dirk tries to tempt John into giving in and use the powers of the Trident for himself.",
                  info:"Attack Dirk",
                  options:{
                    msg:"John goes mad with power with the Trident. He takes over the world and becomes the ruler of Earth and eventually leads to the destruction of the planet with the Trident's destructive powers.",
                    info:"",
                  }
                }
              }
            }
          }
        },
        b:{
          msg:"John decides to go to Puerto Rico, as he sets part to the small caribbean island he encounters residents of the are that talk about a item of great power which had been casted away by the gods because of its great power of destruction. The item has always been searched for, however no one has ever found the igniting piece which powers the trident. The residents lead John to a ancient cave where there was the torch that never ran out. He was instructed to go in there and pick up the second piece of the trident which the oldest sorcerer of the island had been holding for over a centenary. The sorcerer warned John that there had been some suspicious activity near the cave and that the elders had advised the residents to stay away from it since it could be dangerous for them. The sorcerer was too old to use magic so he couldn’t help him with anything. His enemy team had already tried to get their hands on it and had placed dynamite all over the cave to destroy the possibility of John getting the other piece before the others",
          info:"Go to Puerto Rico",
          options:{
            a:{
              msg:"John decides to go in the cave desperate to find the trident. As he enters the cave he totally forgets the fact that the enemy had already placed traps all over the cave. John trips on one of the wires and activates the dynamite. John doesn’t have enough time to escape the cave so he runs after the light which was the other piece of the trident, however the dynamite is set off and he is obliterated in thousands of chunks. You died.",
              info:"Go in the cave"
            },
            b:{
              info:"Do not enter cave",
              msg:"You decide not to enter the cave. You’re wise and decide to wait for the dynamite to be set off by another reason. Therefore you are able to obtain the remaining piece of the trident. Once John gets closer to it, the cave begins to shake as well as the two pieces of the broken trident. The main piece of the trident raises from the bottom of a chamber like place. The headpiece is glowing and John feels a magnetic force pulling them together. The trident is reunited and you successfully prevent the end of all times!",

            }

          }
        }
      }
    },
    b:{
      msg:"He decides to stay in New York. Rushing to Florida wasn’t worth the stress he could face. Studying and researching keeps him up all day. Our hero has been puzzled by a chemical he found. A fizzling dark green color is encapsulated by the flask. Our hero then does the impossible and loses his balance. The dark green fizzy liquid drops all over the map. On the verge of losing his sanity, he decides it still was not worth a single drop of stress. That’s when he noticed something. Words appear on the map stating “People you lost often leaves things behind them”. As he finished reading he realized that the map was guiding to his mom. Then he notice something else. He sees a number. 023. He recognizes this number. Immediately he recognized the situation he was in. Now he has to choose what to do.",
      info:"Stay in NY and continue his archaeologist career where he finds something else",
      options:{
        a:{
          msg:"The John has to decided to search for the item his mom left behind, but he only had his father to ask. John told his father about what he had found on the map and asked him if he knew anything about the item his mother left. His father told John that he had absolutely no idea on what the item may be. After a long silence John’s father told him that they should set out to Florida because he and John’s mother went their for a long period before having a baby (John). John went to the attic to look for extra suitcase. While taking the bag, the side of the bag hit a box making it to fall. While trying to put staff back into the box, he found a small musical box and when he open the box he found a trident toy and he saw “Sugar loaf mountain” written at the trident handle",
          info:"Go find what his mom had left behind",
          options:{
            a:{
              msg:"John decide to keep the music box a secret from his father, so at a early morning he leaves the house quietly and head to Florida alone, when he get their he went directly to Sugarloaf mountain. John climbed the mountain and when he reach the top of the mountain he found a huge door with ancient greek words writing on it. John was able to read what was written on the door because he knew every ancient languages. After he finished reading what was written on the door his next step was to write the password for the door to be open. John wrote “Poseidon” as the password because the symbols on the door was guide to him. When John enter the password the door opened. John went inside and the door closed after him. When he enter he was amazed by the view of the colorful Reed Flute. While exploring the place John come up to a another secret door, however this door didn't have anything written on it, but a red light was coming from beneath the door.",
              info:"KEEP THE MUSICAL BOX A SECRET FROM HIS DAD",
              options:{
                a:{
                  msg:"John decides to open the secret door to see what inside. When he open the door he saw the trident on the center of an open volcano, he then notice that there was a bridge that he can use to get into the trident. John took the bridge and get into the trident safely. John took the trident and get out of the place by written the password again to open the door for him to get out.  John succeeded finding the trident and now he is the god of sea. YOU HAVE SUCCESSFULLY COMPLETED THE STORY!",
                  info:"Open the secret door",
                },
                b:{
                  msg:"John decide not to open the door afraid of the red light he saw. However he didn't stop exploring the place instead he went even deep into the cave. While walking he saw symbols and drawing at the walls, so he follows the drawing until he accidently stepped on a button that makes a lot sword to bomb out from every side and killed John. You died.",
                  info:"Do not open the secret door"
                }
              }
            }

            }
        },
        b:{
          msg:"023 was an old acquiescent of John and Miami was the only place 023 could be located at. John traveled to Miami. He had so many questions and yet so little time. John asks the locals around for a person who looked like 023. A man reported that someone that fitted 023's description was last seen inside a bar a few miles away. John rents a car and drives the bar. He finds 023 and as 023 sees John, he starts running. John gave chase to 023 through town and finally corners him in an alleyway. He starts interrogating 023 and discovers the the Trident has the power to destroy the world and that there is another who is searching for the Trident as well. John had little time is and had enough time for one more question.           ",
          info:"Interrogate 023 ",
          options:{
            a:{
              msg:"John asks 023 for the whereabouts of the Trident. He tells John that the Trident was separated into 3 pieces and he has one of the pieces. He gives the piece to John, hoping that he would let him go. He also tells John the the other 2 pieces are on the island of Bermuda and Puerto Rico.",
              info:"Ask about the whereabouts of the Trident",
              options:{
                a:{
                  msg:"John goes to the island of Bermuda, where he encounters his best friend, James Jameson, on vacation. After a small conversation, they are suddenly attacked a mysterious group of black hooded figures. John and James were able to defeat the hooded figures. As James tries to interrogate the hooded figures, they took out a piece of gum, which kills them instantly with foam coming out of their mouths. Finding no answers, they head to the exact location on the map, which leads them to Crystal Cave. As they walk further inside, the trident piece began to glow brighter. They reach to an area that prevents the public from going further. The piece started to glow even brighter and the small waterfall inside began to stop flowing, revealing a hidden door with the symbol of the trident on it. They head inside, finds the piece and more hooded figures appear and steal the piece of the trident. After the hooded figures stole the piece, the cave starts to overflow with water. The heroes escape the flooding cave. When they finally escaped outside, John noticed that one of the hooded figures had dropped a pack of gum. The pack of gum reads, Trident, which John found peculiar. Inside the pack of gum, he starts to see more coordinates to another location. James says that they should head to the police station. John has to make a decision.",
                  info:"Go to Bermuda",
                  options: {
                    a:{
                      msg:"John and James heads to a local police station. Inside, they file a report and informed the police officers about the pack of gum they had found. Suddenly, the police officers detained both of them. The police officers then called someone on the phone. James, who happens to know every single language, was able to understand the conservation the police officers were having. James whispers the conservation to John and formulates a plan. John noticed that there is a small very eroded lock that is keeping the door locked and also has a small knife that he has inside his boot. He figures he could chip the lock to unlock the door and escape. James insisted that they should not do anything as they have a risk of getting killed",
                      info:"Go to the police station",
                      options:{
                        a:{
                          msg:"John starts chipping away the lock with his small knife. He is successfully escapes the cell, but is met with 4 armed police guards who opened fire on John. You died.",
                          info:"Chip the lock and escape"
                        },
                        b:{
                          msg:"",
                          info:"Wait in the cell",
                          options:{
                            msg:"John and James stayed in the cell and are then taken away by 4 armed guards and were placed hoods onto their heads. They are placed inside a car and traveled for what seems to be hours. Once they stopped, they were brought into a room.The armed guards removed their hoods and warmly greeted by a man who introduced himself as Dirk Van de Put, CEO of Mondelez International and revealed the location they were kept as the headquarters of Mondelez International. The man revealed to be his John's true father. Dirk coldly addresses John as nothing but a mistake. Dirk then explains why John and James are captured. Mondelez International is the company that owns the gum brand, Trident. Dirk saw that his gum brand had to be the best gum in the world and would not stand for any competition. His plan for the Trident was to use it to wipe out any competition that stood in his way and rule the world with gum and he was not going to let someone ruin his plan. He then orders the guards to execute both John and James. John tries to explain to Dirk that he’s the only one that can find the last piece of the Trident, with him having the ability to read the map and his only demand was to allow James to live. Dirk reluctantly accepts the agreement. He then has his men to untie John but not James and have them bring in the 3 pieces of the trident and the ancient map. As the the 3 pieces are brought together, they began to shine to from the location they were found in to the very center of the 3 points, the center of the Bermuda Triangle. Legends had it that ships that travel through the Bermuda Triangle were lost and never to seen again, which could explain why the island of Atlantis could not be found. Dirk then orders his men to take John and James with him to the location. As they sail towards the Bermuda Triangle, mist began to roll out and, the pieces began to act as a compass and point the ship towards the island.They reached the island and at the center lies the final piece of the Trident. Giggling with joy, Dirk walked carelessly to the center and grabbed the piece of the Trident. As he does this, water began to burst from the ground. Dirk quickly runs back and the pieces magnetically form together into the Trident and the water stopped flowing. Dirk holds the Trident in the air and laughs maniacally. John takes this chance to cut himself free of his bonds with his knife he still had inside his boot and frees James as well. "
                          }
                        }
                      },
                      b:{
                        //inside his
                        msg:"John and James head to the location that was marked inside the gum pack.  The location leads them to Deerfield, Illinois, home to the headquarters of Mondelez International. John and James tries to to sneak inside of the building but then were captured by armed guards and were placed hood upon them and brought into a room.The armed guards removed their hoods and warmly greeted by a man who introduced himself as Dirk Van de Put, CEO of Mondelez International and revealed the location they were kept as the headquarters of Mondelez International. The man revealed to be his John's true father. Dirk coldly addresses John as nothing but a mistake. Dirk then explains why John and James are captured. Mondelez International is the company that owns the gum brand, Trident. Dirk saw that his gum brand had to be the best gum in the world and would not stand for any competition. His plan for the Trident was to use it to wipe out any competition that stood in his way and rule the world with gum and he was not going to let someone ruin his plan. He then orders the guards to execute both John and James. John tries to explain to Dirk that he’s the only one that can find the last piece of the Trident, with him having the ability to read the map and his only demand was to allow James to live. Dirk reluctantly accepts the agreement. He then has his men to untie John but not James and have them bring in the 3 pieces of the trident and the ancient map. As the the 3 pieces are brought together, they began to shine to from the location they were found in to the very center of the 3 points, the center of the Bermuda Triangle. Legends had it that ships that travel through the Bermuda Triangle were lost and never to seen again, which could explain why the island of Atlantis could not be found. Dirk then orders his men to take John and James with him to the location. As they sail towards the Bermuda Triangle, mist began to roll out and, the pieces began to act as a compass and point the ship towards the island.They reached the island and at the center lies the final piece of the Trident. Giggling with joy, Dirk walked carelessly to the center and grabbed the piece of the Trident. As he does this, water began to burst from the ground. Dirk quickly runs back and the pieces magnetically form together into the Trident and the water stopped flowing. Dirk holds the Trident in the air and laughs maniacally. John takes this chance to cut himself free of his bonds with his knife he still had inside his boot and frees James as well. ",               
                        info:"Go to the location marked on the pack of gum.",
                        options:{
                          b:{
                            msg:"John charges at Dirk and tries to pull away the Trident from him. John is able to take away the Trident from Dirk and feels the immense power flowing from the Trident. Dirk tries to tempt John into giving in and use the powers of the Trident for himself.",
                            info:"Attack Dirk",
                            options:{
                              a:{
                                msg:"John goes mad with power with the Trident. He takes over the world and becomes the ruler of Earth and eventually leads to the destruction of the planet with the Trident's destructive powers. THE END",
                                info:"Use the powers for yourself",
                              },
                              b:{
                               msg:"",
                               info:"Don't give in to the power"
                             } 
                            }
                          }
                        }
                      }
                    },
                    b:{
                      //insde his
                      msg:"John and James head to the location that was marked inside the gum pack.  The location leads them to Deerfield, Illinois, home to the headquarters of Mondelez International. John and James tries to to sneak inside of the building but then were captured by armed guards and were placed hood upon them and brought into a room.The armed guards removed their hoods and warmly greeted by a man who introduced himself as Dirk Van de Put, CEO of Mondelez International and revealed the location they were kept as the headquarters of Mondelez International. The man revealed to be his John's true father. Dirk coldly addresses John as nothing but a mistake. Dirk then explains why John and James are captured. Mondelez International is the company that owns the gum brand, Trident. Dirk saw that his gum brand had to be the best gum in the world and would not stand for any competition. His plan for the Trident was to use it to wipe out any competition that stood in his way and rule the world with gum and he was not going to let someone ruin his plan. He then orders the guards to execute both John and James. John tries to explain to Dirk that he’s the only one that can find the last piece of the Trident, with him having the ability to read the map and his only demand was to allow James to live. Dirk reluctantly accepts the agreement. He then has his men to untie John but not James and have them bring in the 3 pieces of the trident and the ancient map. As the the 3 pieces are brought together, they began to shine to from the location they were found in to the very center of the 3 points, the center of the Bermuda Triangle. Legends had it that ships that travel through the Bermuda Triangle were lost and never to seen again, which could explain why the island of Atlantis could not be found. Dirk then orders his men to take John and James with him to the location. As they sail towards the Bermuda Triangle, mist began to roll out and, the pieces began to act as a compass and point the ship towards the island.They reached the island and at the center lies the final piece of the Trident. Giggling with joy, Dirk walked carelessly to the center and grabbed the piece of the Trident. As he does this, water began to burst from the ground. Dirk quickly runs back and the pieces magnetically form together into the Trident and the water stopped flowing. Dirk holds the Trident in the air and laughs maniacally. John takes this chance to cut himself free of his bonds with his knife he still had inside his boot and frees James as well. ",
                      info:"Go to the location marked on the pack of gum.",
                      options:{
                        a:{
                          msg:"John and James successfully escapes the clutches of Dirk, but failed to stop him from the ruling the world with the Trident at hand. The gum brand Trident became the number one gum product in the world.",
                          info:"Escape the Island",
                          
                        },
                        b:{
                          msg:"John charges at Dirk and tries to pull away the Trident from him. John is able to take away the Trident from Dirk and feels the immense power flowing from the Trident. Dirk tries to tempt John into giving in and use the powers of the Trident for himself.",
                          info:"Attack Dirk",
                          options:{
                            msg:"John goes mad with power with the Trident. He takes over the world and becomes the ruler of Earth and eventually leads to the destruction of the planet with the Trident's destructive powers.",
                            info:"",
                          }
                        }
                      }
                    }
                  }
                },
                b:{
                  msg:"John decides to go to Puerto Rico, as he sets part to the small caribbean island he encounters residents of the are that talk about a item of great power which had been casted away by the gods because of its great power of destruction. The item has always been searched for, however no one has ever found the igniting piece which powers the trident. The residents lead John to a ancient cave where there was the torch that never ran out. He was instructed to go in there and pick up the second piece of the trident which the oldest sorcerer of the island had been holding for over a centenary. The sorcerer warned John that there had been some suspicious activity near the cave and that the elders had advised the residents to stay away from it since it could be dangerous for them. The sorcerer was too old to use magic so he couldn’t help him with anything. His enemy team had already tried to get their hands on it and had placed dynamite all over the cave to destroy the possibility of John getting the other piece before the others",
                  info:"Go to Puerto Rico",
                  options:{
                    a:{
                      msg:"John decides to go in the cave desperate to find the trident. As he enters the cave he totally forgets the fact that the enemy had already placed traps all over the cave. John trips on one of the wires and activates the dynamite. John doesn’t have enough time to escape the cave so he runs after the light which was the other piece of the trident, however the dynamite is set off and he is obliterated in thousands of chunks. You died.",
                      info:"Go in the cave"
                    },
                    b:{
                      info:"Do not enter cave",
                      msg:"You decide not to enter the cave. You’re wise and decide to wait for the dynamite to be set off by another reason. Therefore you are able to obtain the remaining piece of the trident. Once John gets closer to it, the cave begins to shake as well as the two pieces of the broken trident. The main piece of the trident raises from the bottom of a chamber like place. The headpiece is glowing and John feels a magnetic force pulling them together. The trident is reunited and you successfully prevent the end of all times!",
        
                    }
        
                  }
                }
              }
            },
            b:{
              msg:"John asks 023 for the other person who is seeking the Trident. 023 reveals the other person was his own father. He couldn't believe it. His own father was trying to find the Trident as well? The idea baffled him. His father was a shoemaker, not an archaeologist. John demanded 023 to stop playing games with him and talk. 023 said that no lies had ever come from his mouth. John throws 023 into a dumpster and proceeds to head back to New York for anymore clues. As he reaches the museum, he noticed his father was there as well. John hides between a corner and peeks his head out and sees his father looking very interested at the map he found earlier.",
              info:"Ask who else is seeking for the Trident",
              options:{
                msg:"",
                info:"Follow your father ",
                options:{
                  msg:"",
                  info:"John follows his father very carefully, trying not to get caught. He follows him to the bathroom, where he then pressed the urinal flush buttons in a weird order and opens a hidden passageway. John became very concern that his father may be an enemy. After a few minutes, the secret door opened again and John's father exits the bathroom. John, still hiding, is able to avoid his father's detection and enters the bathroom. John enters the secret pass code and enters the hidden passageway. Inside, he walks down some stairs until he can see light coming from underneath a door.",
                  options:{
                    b:{
                      msg:"John heads back from the the secret passageway and encounters 023 again. 023 charges at John, knocking him onto the bathroom floor. John kicks him off and into a stall where a innocent man, minding his business, was taking a shit. Their fight ensued and 023 pulls out a large knife and John pulls out his smaller knife inside his boot. Somehow, John was able to defeat 023, but his injuries were too much for him and he bled out.",
                      info:""
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
