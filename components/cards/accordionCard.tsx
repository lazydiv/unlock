/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionCard() {
    return (
        <div className="w-5/6 md:w-4/6 mx-auto pb-10">
            <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">Solve the riddle⭐</AccordionTrigger>
                    <AccordionContent className="font-mono text-md">
                        In a time when screens were blank, 🖥️ <br />
                        Two minds sparked a coding prank. 💡 <br />
                        They dreamt of a digital hive, 🌐 <br />
                        Can you guess when Microsoft came alive? 🚀
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl">solve the secret code 💃</AccordionTrigger>
                    <AccordionContent className="font-mono text-md ">
                        🔐 Embark on a cryptic quest! To decrypt the enigma secured with AES 256 encryption, delve
                        into the realm of personal connection. The secret key to unravel this mystery lies within my real
                        name. Can you crack the code and reveal the hidden password? Ready for the intriguing riddle? 🚀
                        <div className="bg-slate-950  border border-white/50 text-xs text-center mx-auto md:text-lg p-5 mt-2 rounded-xl">
                            U2FsdGVkX19OS/+OmTwPGc2gSxSHTGGNgd7rqDTOhwk=
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">Do some math📖</AccordionTrigger>
                    <AccordionContent className="font-mono text-md">
                        solve the follwing eq: <br />
                        <h1 className="bg-slate-950 border border-white/50 text-lg p-5 mt-2 rounded-xl">
                            (5^3 * 4 + 200) - (1500/3 + 2^4) + (5^3 * 4 + 200) - (1500/3 + 2^4)
                            - (5^3 * 4 + 200) - (1500/3 + 2^4)
                        </h1>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionCard