                    let message = document.getElementById("message");
                    let tk = true;
                    let takeaways = document.getElementById("takeaways");
                    let a = 0;
                    let b = 0;
                    let surA= 0;
                     const music = new Audio('rosas.mp3');
                     const mc = new Audio('tmblr.mp3');
                    const messages = [
                                "I know you're happi now but always be safe hmm",
                                "Always akong naniniwala sayo hmm",
                                "Be happyy and always be kind",
                                "I'm always proud of youu",
                                "Don't forget to eat and sleep well",
                                "Don't be harsh on yourself, you're doing great!",
                            ];
                        function surprise() {
                            console.log(surA);
                           
                           
                            if (surA === 0) {

                           message.innerHTML = "Hello Dhendhen, I just wanna say na happyybirthday sayo. I know we don't talk anymore and I also know na happy kana ngayon but I just wanna greet you and tell you na happybirthday alsoo I wanna say na thankyou for all of the memories we spend. I know na di kana babalik and araw araw kong tinatanggap yun it stil hurts but hmm. Don't worry hindi kita gagambalahin hmm I just want you to be safe and happy so hmm always kang kumain hmm at remember na always akong proud sayo ingat ka palagi po hmm, hindi kona to papahabain pa hmm basta aa promise me na magiging happy ka well that's all nalang siguro babush muna ingat hmm";
                          message.style.backgroundColor = "black";
                            message.style.color = "white";
                                surA = 1;
                                    music.play();
                                    sur.innerHTML = "Click Me! To pause the sound!";
                            } else {
                                message.innerHTML = "";
                                message.style.backgroundColor = "transparent";
                                surA = 0;
                                music.pause();
                                sur.innerHTML = "Click Me! For a surprise!";
                            }
                        }
                        function musc() {
                                   
                            if (b == 0){
                                console.log(b);
                                mc.play();
                                b = 1;
                                kanta.innerHTML = " Now playing Tumblr girl, click to Pause Music!";
                            } else {
                                console.log(b);
                                 mc.pause();
                                 b = 0;
                                 kanta.innerHTML = "Play Music!";
                            }
                        }
                        function thinking(){
                             message.innerHTML = "Try to take a deep breath and hold it for a few seconds hmm, I know na this is an obsulete advice but I just think na it can help you calm down, also try to eat icecream and fries if may problem hmm. Whenever na nafefeel mo na down na down ka you can always breath hmm this is just a reminder from me hmm. Maoverthink kapa man din tas maraming iniisip hmm, try not to overcomplicate things hmm and don't let it consume you ok be safe always";
                          message.style.backgroundColor = "black";
                            message.style.color = "white";
                        }

                        function lastmes(){
                             message.innerHTML = "Be safe always your happiness is my happiness so be happy always hmm";
                          message.style.backgroundColor = "black";
                            message.style.color = "white";
                        }

setInterval(() => {
    takeaways.innerHTML = messages[a];
    
    a = (a + 1) % messages.length;
}, 3000);
                