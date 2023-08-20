import React from "react"

function Home() {


    return (
        <div className="Home">
            <div class="hero">
                <h2>Cynthia Cabral, PhD</h2>
                <h3>Licensed Clinical Psychologist</h3>
                <img src={"/images/bloomHorizontal.jpeg"} class="img-fluid"/>
                <br></br>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-7 par2left">
                        <p>As a therapist, I think it’s important to pay attention to the stories that
                            we tell ourselves about our lives. Sint officia consectetur nostrud eiusmod ex irure deserunt in ad cillum
                            magna in dolor. Veniam enim laborum consequat ut in magna anim laboris
                            proident. Ad sit nisi ut cupidatat. Anim nostrud elit labore irure adipisicing
                            excepteur culpa voluptate enim cillum occaecat magna officia. Sint officia
                            consectetur nostrud eiusmod ex irure deserunt in ad cillum magna in dolor.
                            Veniam enim laborum consequat ut in magna anim laboris proident. Ad sit
                            nisi ut cupidatat. Anim nostrud elit labore irure adipisicing excepteur
                            culpa voluptate enim cillum occaecat magna officia.</p>
                            <div>
                                <p class="text-center">
                                    <a href="wwww.google.com" style={{color:"#7a7d7b"}}>
                                        Get in touch to set up a FREE consultation
                                    </a>
                                    <br/>
                                    - or -
                                    <br/>
                                    Give me a call at:
                                    <br/>
                                    (833) 696-0921
                                </p>

                            </div>
                    </div>


                    <div class="col-5 row">
                        <div class="par2rightA">
                            <img src={"/images/cin_headshot.jpeg"} class="img-fluid"/>
                        </div>




                    </div>



                </div>
            </div>

            <br/>
            <hr/>

            <div class="container" id="WhoThisIsFor">
                <div class="row">
                    <h4>Who is this for?</h4>
                </div>
                <div class="row par1">
                    <p> Are you dealing with challenges or problems that make you
                        feel like you are not in control of your own narrative?
                        When you talk to yourself, are you sometimes less than
                        kind?
                        Do you feel unsure of where your story might be
                        headed next?
                        <br/>
                        Sint officia consectetur nostrud eiusmod ex irure
                        deserunt in ad cillum magna in dolor. Veniam enim
                        laborum consequat ut in magna anim laboris proident.
                        Ad sit nisi ut cupidatat. Anim nostrud elit labore
                        irure adipisicing excepteur culpa voluptate enim cillum
                        occaecat magna officia. Sint officia consectetur nostrud
                        eiusmod ex irure deserunt in ad cillum magna in dolor.
                        Veniam enim laborum consequat ut in magna anim laboris
                        proident. Ad sit nisi ut cupidatat. Anim nostrud elit
                        labore irure adipisicing excepteur culpa voluptate enim
                        cillum occaecat magna officia.
                    </p>
                </div>

                <div class="row">
                    <div class="col-7 mt-2 par2left">
                        <img src={"/images/rain.jpeg"} class="img-fluid"/>
                    </div>
                    <div class="col-5 par2rightB">
                        <p>
                        <span style={{color:"#7a7d7b", fontSize:"larger"}}>
                        We specialize in treating:</span><br/>
                            <ul>
                                <br/>
                                <li>Anxiety</li>
                                <li>Trauma and PTSD</li>
                                <li>Depression</li>
                            </ul>
                        </p>
                        <div>
                            <p>
                                <span style={{color:"#7a7d7b", fontSize:"larger"}}>
                                Additional Areas of Expertise:</span><br/>
                                <div class="row">
                                <ul class="col-6">
                                    <br/>
                                    <li>ADHD</li>
                                    <li>Child</li>
                                    <li>Grief</li>
                                    <li>LGBTQ+</li>
                                    <li>Life Transitions</li>
                                    <li>Mood Disorders</li>
                                    <li>Parenting</li>
                                    <li>Peer Relationships</li>
                                    <li>Racial Identity</li>
                                </ul>

                                <ul class="col-6">
                                    <br/>
                                    <li>Relationship Issues</li>
                                    <li>School Issues</li>
                                    <li>Self Esteem</li>
                                    <li>Self-Harming</li>
                                    <li>Sexual Abuse</li>
                                    <li>Stress</li>
                                    <li>Suicidal Ideation</li>
                                    <li>Women's Issues</li>
                                </ul>
                                </div>

                            </p>

                        </div>
                        <div>
                                <p class="text-center">
                                        Find out how I can help you take control:
                                    <br/>
                                    <br/>
                                    <a href="wwww.google.com" style={{color:"#7a7d7b"}}>
                                        Set up a FREE consultation
                                    </a>
                                    <br/>
                                    - or -
                                    <br/>
                                    Call (833) 696-0921
                                </p>

                            </div>
                    </div>
                </div>
            </div>

            <br/>
            <hr/>

            <div class="container" id="HowICanHelp">
                <h4>How can we help?</h4>
                <p>My approach to treatment is to provide a safe and protected
                    space to help you nurture and develop your most authentic
                    self. In our work together, I would use a client-centered,
                    collaborative approach to identify the parts of your story
                    that may need “editing” and then address those areas using
                    evidence-based, trauma informed, culturally sensitive
                    therapeutic approaches (like Cognitive Behavioral Therapy).</p>
            </div>

            <br/>
            <hr/>

            <div class="container" id="WhyUs">
                <h4>Why us?</h4>
                <p>I have over ten years of experience working with adolescents
                    and adults on a variety of concerns, such as trauma,
                    depression, anxiety, & harm reduction. In my work with
                    clients, I invite conversations about systemic inequality
                    (i.e., racism, sexism, homophobia, transphobia) and I
                    encourage clients to explore their concerns in these larger
                    systemic contexts.</p>
            </div>
        </div>
    );
  }

export default Home;