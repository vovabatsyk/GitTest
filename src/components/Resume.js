import React from 'react'
import { languages, tools } from '../data/data'
import { Bar } from './Bar'
import { generateKey } from '../services/key-generator'

export const Resume = () => ( 
    <div className = 'container resume' >
    <div className = 'row' >
    <div className = 'col-lg-6 resume-card' >
    <h4 className = 'resume-card__heading' >Education</h4> 
    <div className = 'resume-card__body'>
    <h5 className = 'resume-card__title' > MASTER OF LAW < /h5> 
    <p className = 'resume-card__name' >
        Lviv State University of Internal Affairs 
    </p> 
    <p className = 'resume-card__date' > 2005 - 2010 < /p> 
    </div> 
    <div className = 'resume-card__body' >
    <h5 className = 'resume-card__title' > SOFTWARE DEVELOPER < /h5> 
    <p className = 'resume-card__name' >
        Computer Academy IT Step 
    </p> 
    <p className = 'resume-card__date' > 2019 - until now < /p> 
    </div> 
    </div>

    <
    div className = 'col-lg-6 resume-card' >
    <
    h4 className = 'resume-card__heading' > Experience < /h4> <
    div className = 'resume-card__body' >
    <
    h5 className = 'resume-card__title' > SERGEANT < /h5> <
    p className = 'resume-card__name' > Armed Forces of Ukraine < /p> <
    p className = 'resume-card__date' >
    January 2012 - August 2017 <
    /p> <
    /div> <
    div className = 'resume-card__body' >
    <
    h5 className = 'resume-card__title' > CHIEF SPECIALIST < /h5> <
    p className = 'resume-card__name' > Lviv City Council < /p> <
    p className = 'resume-card__date' > August 2018 - until now < /p> <
    /div> <
    /div> <
    /div>

    <
    div className = 'row' >
    <
    div className = 'col-lg-6 resume-languages' >
    <
    h5 className = 'resume-language_heading' >
    Language and Framework <
    /h5> <
    div className = 'resume-language__body' > {
        languages.map(language => ( <
            Bar value = { language }
            key = { generateKey(language.name) }
            />
        ))
    } <
    /div> <
    /div>

    <
    div className = 'col-lg-6 resume-languages' >
    <
    h5 className = 'resume-language_heading' >
    Tools and Softwares <
    /h5> <
    div className = 'resume-language__body' > {
        tools.map(tool => ( <
            Bar value = { tool }
            key = { generateKey(tool.name) }
            />
        ))
    } <
    /div> <
    /div> <
    /div> <
    /div>
)