import React from "react"

function About() {


    return (
        <div className="Home">
            <div className="hero">
                <h2 className="name">Cynthia Cabral, PhD</h2>
                <h3 className="title">Licensed Clinical Psychologist</h3>
                <br></br>
            </div>
            <div className="About container">
                <div className="textbox">
                    <h2 className="mt-2 title-about text-center">Get to Know Dr. Cabral</h2>
                    <br></br>
                    <div className = "row">
                        <div className="col">
                            <div className="headshot col-4">
                                <img src={"/images/cin_about.jpeg"} className="img-fluid"/>
                            </div>
                            <p>Cynthia Cabral, Ph.D. (pronouns: they/she) is a clinical psychologist
                                with a private practice in Brooklyn, New York, treating adolescents and
                                adults presenting with depression, anxiety, trauma, self-harm behaviors,
                                and substance use concerns using a collaborative, client-centered approach
                                that incorporates Cognitive Behavioral Therapy (CBT) and Motivational
                                Interviewing (MI) frameworks.
                            </p>
                            <p>Previously, Dr. Cabral served as the Counseling Center Director at St.
                                Joseph’s University in Brooklyn, as well as the  Clinical Director at PRIDE
                                (Promoting Resilience, Intersectionality, Diversity, and Equity) Research
                                Consortium affiliated with Hunter College.
                            </p>
                            <p>
                                At PRIDE, Dr. Cabral provided
                                clinical supervisory support for short-term manualized interventions intended
                                to reduce HIV transmission and risky sexual behavior with at-risk populations
                                such as men who have sex with men and transgender emerging adults.
                            </p>
                            <p>Dr. Cabral received their doctoral degree from St. John’s University,
                                where their research fellowship focused on the assessment and treatment
                                of trauma in racial/ethnic minority communities throughout Western Queens.
                            </p>
                            <p>
                                They have provided clinical treatment to adolescents in day treatment
                                settings with co-occurring substance use and mental health disorders,
                                adolescent survivors of physical and sexual abuse, and students in
                                school-based settings with a variety of mental health concerns using
                                evidence based, trauma-informed, and culturally competent treatment
                                interventions. In doing so, Dr. Cabral has developed expertise in
                                trauma-informed care and an understanding of the relationship between
                                identity development, trauma, and health outcomes.
                            </p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
  }

export default About;