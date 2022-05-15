import React, { useState, useEffect, useRef } from "react";

function ProjectsSlider({ parentRef }) {
    const [parentWidth, setParentWidth] = useState(0);
    const [leftState, setLeftState] = useState([0, 1]);
    const projectsCtnRef = useRef(null);

    useEffect(() => {
        function resizeListener() {
            setParentWidth(parentRef.current.offsetWidth);
        }
        resizeListener();

        function slider() {
            setLeftState((prevVal) => {
                // console.log(prevVal[0] * -1, prevVal.length, prevVal, prevVal[0] * -1 === prevVal.length - 1);
                if (prevVal[0] * -1 === prevVal.length - 1) {
                    // return prevVal.forEach((value, i) => i)) // dynamic way of doing it if number of carousel items are unknown
                    return [0, 1]; // Number of items are known, statically setting it to avoid some extra computation
                } else {
                    return prevVal.map((val) => val - 1);
                }
            });
            // if (leftState[0] * -1 === leftState.length) {
            //     // setLeftState(prevVal => prevVal.forEach((value, i) => i)) // dynamic way of doing it if number of carousel items are unknown
            //     setLeftState([0, 1]) // Number of items are known, statically setting it to avoid some extra computation
            // } else {

            //     setLeftState(prevVal => {
            //         console.log(prevVal);
            //         return prevVal.map(val => val - 1)
            //     });
            // }
        }

        const sliderTimer = setInterval(() => {
            slider();
        }, 4000);

        window.addEventListener("resize", resizeListener);
        () => {
            window.removeEventListener("resize", resizeListener);
            clearInterval(sliderTimer);
        };
    }, []);

    return (
        <div ref={projectsCtnRef}>
            <div
                className="project"
                style={{
                    width: parentWidth,
                    left: leftState[0] * parentWidth,
                }}
            >
                <div>
                    <h1>Socio</h1>
                    <h2>A social media platform</h2>
                    <p className="inferences">
                        I started the project to learn how to build an
                        application from scratch that was relatively complex for
                        my level of competence at the time, tested the knowledge
                        I had, and posed challenges so that the project provided
                        room to learn and grow. <br />
                        And by the end I developed a good understanding of
                        React, Redux, NodeJS, got my first brush with AWS,
                        namely S3 and RDS, and grasped the fact as to why
                        project management is said to be one of the most
                        important things to keep in mind as a developer.
                    </p>
                </div>

                <div>
                    <ul>
                        <li>
                            <p>
                                An application where you can create posts by
                                text, photos, or both. Like them, comment on
                                them.
                            </p>
                        </li>
                        <li>
                            <p>
                                Get notified of all activities that you have
                                subscribed to, for ex. a new post by a friend, a
                                new like or comment on your post, etc, by push
                                notifications, to your desktop, and mobile
                                devices.
                            </p>
                        </li>
                        <li>
                            <p>Features a live chat messaging service.</p>
                        </li>
                        <li>
                            <p>
                                Uses service workers to process messages pushed
                                by the server. Used to deliver push
                                notifications, in-app notifications and power
                                the live chat.
                            </p>
                        </li>
                        <li>
                            <p>Features custom theming</p>
                        </li>
                    </ul>

                    <p>
                        Languages & tools: Javascript, React, Redux, Styled
                        Components, Service Worker, NodeJS, PostGreSQL, AWS S3,
                        AWS RDS, Heroku
                    </p>
                    <a href="https://www.github.com/dannyboi07/socialMediaProjFE">
                        Frontend Code
                    </a>

                    <a href="https://www.github.com/dannyboi07/socialMediaProjBE">
                        Backend Code
                    </a>

                </div>

                <div></div>
            </div>

            <div
                className="project"
                style={{
                    width: parentWidth,
                    left: leftState[1] * parentWidth,
                }}
            >
                <div>
                    <h1>
                        Lorem Ipsum <span>(In Progress...)</span>
                    </h1>
                    <h2>Chat with friends in real time</h2>
                    <p className="inferences">
                        I want to learn the microservice architecture in
                        practice. This is a project that I have planned out.
                        Relatively simple on the frontend, but complex on the
                        backend, which is where the fun is.
                    </p>
                </div>

                <div>
                    <ul>
                        <li>
                            <p>
                                An application to chat with your friends in real
                                time
                            </p>
                        </li>
                        <li>
                            <p>
                                Chat and express yourself with text, images,
                                emojis and video
                            </p>
                        </li>
                        <li>
                            <p>Plan to add voice calls or video calls</p>
                        </li>
                    </ul>

                    <p>
                        Languages & tools: Javascript, WebSockets, React, Redux, Stitches,
                        Golang, gRPC, Apache Kafka/RabbitMQ, AWS, S3, RDS
                    </p>
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default ProjectsSlider;
