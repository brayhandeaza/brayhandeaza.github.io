import "@styles/Contact.scss"
import { useState } from "react"
import { MdLocationPin, MdEmail } from "react-icons/md"

const ContactScreen: React.FC = () => {
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [subject, setSubject] = useState("")
	const [name, setName] = useState("")

	
	const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.table({ email, message, subject, name })
	}

	return (
		<div className="ContactScreen">
			<main>
				<div className="bd-page-title-area  pt-100">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="bd-page-title text-center z-index">
									<h2 className="breadcrumb-title">Get in Touch</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="bd-contact-area pt-100">
					<div className="container">
						<div className="row input-and-email">
							<div className="col-xxl-4 col-xl-5 col-lg-5">
								<div className="bd-contact-wrapper">
									<div className="bd-contct-item gray-bg mb-30">
										<div className="bd-contct-item-icon">
											<MdEmail size={45} color="#ef0454" />
										</div>
										<div className="bd-contct-item-text">
											<h5 className="bd-contct-item-text-title">Email</h5>
											<a className="mbb-5" href="mailto:info@example.com">brayhandeaza@gmail.com</a>

										</div>
									</div>
									<div className="bd-contct-item gray-bg mb-30">
										<div className="bd-contct-item-icon">
											<MdLocationPin size={45} color="#ef0454" />
										</div>
										<div className="bd-contct-item-text">
											<h5 className="bd-contct-item-text-title">Location</h5><span>New York, New York,
												USA</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xxl-8 col-xl-7 col-lg-7">
								<div className="bd-contact-form-wrapper mb-50">
									<form>
										<div className="row">
											<div className="col-md-6">
												<div className="bd-contact-field mb-30">
													<input onChange={(e) => setName(e.target.value)} placeholder="Name" id="name" type="text" value={name} name="name" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="bd-contact-field mb-30">
													<input onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" type="email" value={email} name="email" />
												</div>
											</div>
											<div className="col-12">
												<div className="bd-contact-field mb-30">
													<input onChange={(e) => setSubject(e.target.value)} placeholder="Subject" id="subject" type="text" value={subject} name="subject" />
												</div>
											</div>
											<div className="col-12">
												<div className="bd-contact-field mb-30">
													<textarea onChange={(e) => setMessage(e.target.value)} name="msg" id="message" value={message} placeholder="Message..." />
												</div>
											</div>
											<div className="col-12">
												<div className="bd-contact-field">
													<button onClick={onSubmit} type="submit" className="theme-btn">Submit</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="bd-map-area pt-100 pb-140">
					<div className="container">
						<div className="bd-map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1646475654918!5m2!1sen!2sbd"></iframe>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default ContactScreen