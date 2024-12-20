import React from 'react'
import Card from './Card'
export default function SubMain() {
    return (
        <>
            <div className=" container submain rounded relative " >

                <div>
                    <div className="">
                        <h2 className="fs-2 fw-bold  " style={{ color: "rgb(255, 119, 0)" }} > MY  <span className='text-white'>Projects</span></h2>

                        <div className="row">

                            <Card
                                image="https://www.saturdaygift.com/wp-content/uploads/Free-Expense-Tracker-Templates-Cute-Printables-SaturdayGift.jpg"
                                title="Expense Tracker"
                                techStack="MERN Stack , Mongodb , Express js , React js , Node js , HTML , CSS " repo="https://github.com/Kartikgupta666/Expense_Traker_app.git"
                                host="https://expense-traker-kartik-app.vercel.app/" />
                            <Card
                                image="https://d2vrvpw63099lz.cloudfront.net/do-i-need-a-chatbot/header-chat-box.png"
                                title="Geminie Integrated chatbot"
                                techStack="Vite , Google gemminie api ,  React js , Node js , HTML , CSS " repo="https://github.com/Kartikgupta666/geminie-integration-in-webhomepage.git"
                                host="https://geminie-integration-in-webhomepage.vercel.app/" />
                            <Card
                                image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png"
                                title="J.A.R.V.I.S"
                                techStack="Python , APIs" repo="https://github.com/Kartikgupta666/jarvis-using-pyton.git"
                                host="#" />
                            <Card
                                image="https://cdn.prod.website-files.com/655083d9a0623d92b0f7ee76/65d75f240100f47fdc306803_keyboard-clicking-sfx-pack_header.jpg"
                                title="Keyboard sound utility"
                                techStack="Python" repo="https://github.com/Kartikgupta666/mechnical-keyboard-utility-in-python.git"
                                host="#" />


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
