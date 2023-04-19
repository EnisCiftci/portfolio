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
                        <p className={"timeline_title"}>Aushilfe Job <a href={"https://www.hellweg.de/ueber-hellweg/das-unternehmen/"} target={"_blank"}>HELLWEG Oberhausen</a></p>
                    </div>
                </div>

                <div className={"timeline_section section_right timeline_show"}>
                    <div className={"timeline_right text-secondary"}>01.04 - 30.06.2021</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Aushilfe Job <a href={"https://www.rewe-group.com/de/unternehmen/"} target={"_blank"}>REWE Oberhausen</a></p>
                    </div>
                </div>

                <div className={"timeline_section section_left timeline_show"}>
                    <div className={"timeline_left text-secondary"}>01.08.2021 - 31.07.2022</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Werkstudent bei <a href={"https://www.aldi-nord.de/unternehmen/ueber-aldi-nord.html"} target={"_blank"}>ALDI NORD</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Wartung, Plege und Manipulation von Datenbanken</li>
                            <li>Schreiben von Routinen um Prozzesse zu Automatisieren</li>
                            <li>Fehlerbehebung in den Verkaufsstellen</li>
                            <li>Rollout eigener Entwicklungen</li>
                        </ul>
                    </div>
                </div>

                <div className={"timeline_section section_right timeline_show"}>
                    <div className={"timeline_right text-secondary"}>Seit 20.07.2022</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Schatzmeister/The-IT-guy bei <a href={"https://vdmev.de/"} target={"_blank"}>VDM e.V.</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Ehrenamtlich</li>
                            <li>Managen der Finanzen</li>
                            <li>Managen der Website/Online-Shop</li>
                        </ul>
                    </div>
                </div>

                <div className={"timeline_section section_left timeline_show"}>
                    <div className={"timeline_left text-secondary"}>Seit 15.02.2023</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Werksdutent bei <a href={"https://www.lachmann-rink.de/"} target={"_blank"}>Lachmann & Rink GmbH</a></p>
                        <ul className={"timeline_desc"}>
                            <li>Fullstack Entwicklung mit Angular</li>
                            <li>Ausarbeitung einer Web-basierten Kommandozentrale für das hauseigene Framework</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}