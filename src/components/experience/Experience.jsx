import aldi from '../../assets/testimonialAldi.pdf'
import "./experience.css"

export default function Experience() {
    return (
        <section id={"experience"}>
            <h2 className={"title-right"}>Experience</h2>
            <div className={"experience_timeline"}>
                <div className={"experience_line"} id={"timeline"}/>
                <div className={"timeline_section section_left timeline_show"}>
                    <div className={"timeline_left text-secondary"}>29.06 - 31.08.2020</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Part-time job @ <a href={"https://www.hellweg.de/ueber-hellweg/das-unternehmen/"} target={"_blank"}>HELLWEG Oberhausen</a></p>
                    </div>
                </div>

                <div className={"timeline_section section_right timeline_show"}>
                    <div className={"timeline_right text-secondary"}>01.04 - 30.06.2021</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Part-time job @ <a href={"https://www.rewe-group.com/de/unternehmen/"} target={"_blank"}>REWE Oberhausen</a></p>
                    </div>
                </div>

                <div className={"timeline_section section_left timeline_show"}>
                    <div className={"timeline_left text-secondary"}>01.08.2021 - 31.07.2022</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Working Student @ <a href={"https://www.aldi-nord.de/unternehmen/ueber-aldi-nord.html"} target={"_blank"}>ALDI NORD</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Maintenance, management, and manipulation of databases</li>
                            <li>Writing routines to automate processes</li>
                            <li>Troubleshooting</li>
                            <li>Rollout of own software</li>
                            <li><a href={aldi} target={"_blank"}>Testimonial</a></li>
                        </ul>
                    </div>
                </div>

                <div className={"timeline_section section_right timeline_show"}>
                    <div className={"timeline_right text-secondary"}>Since 20.07.2022</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Treasurer/The-IT-Guy @ <a href={"https://vdmev.de/"} target={"_blank"}>VDM e.V.</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Honorary</li>
                            <li>Managing finances</li>
                        </ul>
                    </div>
                </div>

                <div className={"timeline_section section_left timeline_show"}>
                    <div className={"timeline_left text-secondary"}>15.02.2023 - 30.08.2023</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Working student @ <a href={"https://www.lachmann-rink.de/"} target={"_blank"}>Lachmann & Rink GmbH</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Fullstack Development with Angular</li>
                            <li>Creating Web-Admin-panels for Frameworks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}