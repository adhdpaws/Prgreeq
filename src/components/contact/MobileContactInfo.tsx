import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

interface ContactInfo {
  callCenter: {
    title: string
    phones: string[]
  }
  location: {
    title: string
    addresses: string[]
  }
  email: {
    title: string
    address: string
  }
  social: {
    title: string
    links: Array<{ name: string; url: string; icon: string }>
  }
}

interface MobileContactInfoProps {
  contactInfo: ContactInfo
  styles: any
}

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
}

export function MobileContactInfo({ contactInfo, styles }: MobileContactInfoProps) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Call Center */}
          <div className={styles.item}>
            <h3 className={styles.title}>{contactInfo.callCenter.title}</h3>
            <div className={styles.textGroup}>
              {contactInfo.callCenter.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className={styles.text}
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className={styles.item}>
            <h3 className={styles.title}>{contactInfo.location.title}</h3>
            <div className={styles.textGroup}>
              {contactInfo.location.addresses.map((address, index) => (
                <p key={index} className={styles.text}>
                  {address}
                </p>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className={styles.item}>
            <h3 className={styles.title}>{contactInfo.email.title}</h3>
            <a
              href={`mailto:${contactInfo.email.address}`}
              className={styles.text}
            >
              {contactInfo.email.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
