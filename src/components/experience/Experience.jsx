import React from 'react';
import "./experience.css"

export default function Experience() {
    return (
        <section id={"experience"}>
            <h2 className={"title-right"}>Experience</h2>
            <div className={"experience_timeline"}>
                <div className={"experience_line"}>
                </div>
                <div className={"timeline_section section_left"}>
                    <div className={"timeline_left text-secondary"}>29.06 - 31.08.2020</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Aushilfe Job HELLWEG Oberhausen</p>
                    </div>
                </div>

                <div className={"timeline_section section_right"}>
                    <div className={"timeline_right text-secondary"}>01.04 - 30.06.2021</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Aushilfe Job REWE Oberhausen</p>
                    </div>
                </div>

                <div className={"timeline_section section_left"}>
                    <div className={"timeline_left text-secondary"}>01.08.2021 - 31.07.2022</div>
                    <div className={"timeline_content content_left"}>
                        <p className={"timeline_title"}>Werkstudent bei ALDI NORD</p>
                        <p className={"timeline_desc"}>
                            -Wartung, Pflege und Mainupaltion von<br></br>
                            Datenbanken
                            <br></br>
                            -Schreiben von Routinen um Prozzesse <br></br>
                            zu Automatisieren
                            <br></br>
                            -Fehlerbehebung in den Verkaufsstellen
                            <br></br>
                            -Rollout eigener Entwicklungen
                        </p>
                    </div>
                </div>

                <div className={"timeline_section section_right"}>
                    <div className={"timeline_right text-secondary"}>Seit 15.02.2023</div>
                    <div className={"timeline_content content_right"}>
                        <p className={"timeline_title"}>Werksdutent bei Lachmann & Rink GmbH</p>
                        <p className={"timeline_desc"}>
                            -Fullstack Entwicklung mit Angular
                            <br></br>
                            -Ausarbeitung einer Web-<br></br>
                            Kommandozentraler für das <br></br>
                            hauseigene Framework
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}