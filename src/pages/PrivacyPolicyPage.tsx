import { Helmet } from "react-helmet-async";
import HeroPrivacy from "../components/Hero/HeroPrivacy";
import { SectionHeading, SectionParagraf } from "../resource/component";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <HeroPrivacy title="Privacy Policy" />
      <section className="py-20 privacy">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <SectionHeading>
                  Privacy Policy for Digital Solutions Group
                </SectionHeading>
                <SectionParagraf>Last updated: 29th May 2023</SectionParagraf>
              </div>

              <div>
                <SectionParagraf>
                  This Privacy Policy outlines how Digital Solutions Group
                  ("DSG," "we," "us," or "our") collects, uses, protects, and
                  discloses the information obtained from users ("you" or
                  "your") of our website. We are committed to safeguarding your
                  privacy and ensuring the security of your personal
                  information. By accessing and using our website, you agree to
                  the terms and conditions outlined in this Privacy Policy.
                </SectionParagraf>
              </div>

              <div>
                <ol>
                  <li>
                    <span>Information We Collect</span> We may collect the
                    following types of information when you visit or interact
                    with our website:
                    <ul>
                      <li>
                        Personal Information: This includes your name, email
                        address, phone number, and any other information you
                        voluntarily provide to us.
                      </li>
                      <li>
                        Log Data: We collect information about your device, IP
                        address, browser type, pages visited, and other
                        statistical data for analytical purposes.
                      </li>
                      <li>
                        Cookies: We use cookies and similar technologies to
                        enhance your browsing experience and track website usage
                        patterns.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Use of Collected Information</span> We may use the
                    information collected from you for the following purposes:
                    <ul>
                      <li>
                        To provide and maintain our services, including customer
                        support and communication.
                      </li>
                      <li>
                        To improve and personalize your experience on our
                        website.
                      </li>
                      <li>
                        To analyze website usage and trends, and to make
                        data-driven business decisions.
                      </li>
                      <li>
                        To send you promotional materials, updates, or
                        newsletters (if you have opted to receive them).
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span>Data Sharing and Disclosure</span> We may share your
                    information with third parties in the following
                    circumstances:
                    <ul>
                      <li>
                        Service Providers: We may engage third-party companies
                        or individuals to perform services on our behalf, such
                        as website hosting, data analysis, and marketing. These
                        service providers will have access to your information
                        as necessary for their respective tasks.
                      </li>
                      <li>
                        Legal Requirements: We may disclose your information if
                        required to do so by law or in response to a valid legal
                        request.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Data Security</span> We implement reasonable security
                    measures to protect your information from unauthorized
                    access, alteration, disclosure, or destruction. However,
                    please be aware that no method of transmission over the
                    internet or electronic storage is completely secure, and we
                    cannot guarantee absolute security.
                  </li>
                  <li>
                    <span>Third-Party Links </span>Our website may contain links
                    to third-party websites or services. We are not responsible
                    for the privacy practices or content of these third parties.
                    We encourage you to read the privacy policies of any linked
                    websites before providing any personal information.
                  </li>
                  <li>
                    <span>Children's Privacy </span>Our website is not intended
                    for individuals under the age of 18. We do not knowingly
                    collect personal information from children. If we become
                    aware that we have collected personal information from a
                    child without parental consent, we will take steps to remove
                    that information from our servers.
                  </li>
                  <li>
                    <span>Your Choices and Rights</span>You have the right to:
                    for individuals under the age of 18. We do not knowingly
                    collect personal information from children. If we become
                    aware that we have collected personal information from a
                    child without parental consent, we will take steps to remove
                    that information from our servers.
                    <ul>
                      <li>Access and update your personal information.</li>
                      <li>
                        Opt-out of receiving promotional communications from us.
                      </li>
                      <li>
                        Request the deletion of your personal information,
                        subject to applicable legal requirements. Please contact
                        us using the information provided in Section 8 to
                        exercise these rights.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
