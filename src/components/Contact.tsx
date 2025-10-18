import React, { useState } from 'react'
import RealTime from './ui/real-time'
import { BiCopy, BiPhoneCall } from 'react-icons/bi'
import { contact } from '@/resources/content'
import { IconBase } from 'react-icons'
import Icon from './Icon'
import ContactForm from './ContactForm'

const ContactSection = () => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contact.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div>
            <h2 className="text-2xl font-medium mb-8 ">Let's Talk</h2>
            <div className='flex gap-4 pl-4 border-secondary border-l justify-between'>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-2 items-center'>
                        <h3 className='text-lg font-medium'>Time for me:</h3>
                        <p className='text-secondary'><RealTime timezone={contact.timezone} timeFormat="hh:mm A" /></p>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-lg font-medium'>Email:</h3>
                        <button onClick={handleCopy} className='cursor-pointer'>
                            <BiCopy className='inline-block mr-2 text-primary' size={16} />
                            <span>
                                {copied ? "Copied!" : contact.email}
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-lg font-medium'>Phone:</h3>
                        <a href={`tel:${contact.phone}`} className='cursor-pointer'>
                            <BiPhoneCall className='inline-block mr-2 text-primary' size={16} />
                            <span>{contact.phone}</span>
                        </a>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-lg font-medium'>Social Links:</h3>
                        <div>
                            {contact.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    className='flex items-center gap-2 text-secondary hover:text-primary rounded-xl hover:bg-black/5 transition-colors -translate-x-3 px-3 py-1 mb-2'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                   <Icon name={social.icon as keyof typeof IconBase} size={16} />
                                   <span className='text-lg'>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-full max-w-xl'>
                    {/* Placeholder for a contact form or additional content */}
                    <h3>Reach Out</h3>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactSection