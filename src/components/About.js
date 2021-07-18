import React from 'react'
import { generateKey } from '../services/key-generator'
import { skills } from '../data/data'
import { SkillCard } from './SkillCard'

export const About = () => {
        return ( <div className = 'about'>
                    <h6 className = 'about__intro' >
                        Result - oriented, highly motivated Software Developer.Proficient both in Frontend( < code > JavaScript < /code>) andBackend technologies( < code > C# < /code>). 
                            </h6>
                    <div className = 'container about__container' >
                        <h6 className = 'about__heading' > What I offer </h6>
                        <div className = 'row' > {
                            skills.map(skill => ( <
                                SkillCard skill = { skill }
                                key = { generateKey(skill.title) }
                                />
                            ))
                        } 
                        </div> 
                    </div>
                </div>
                )
                }