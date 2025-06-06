import React from "react";
import type { Metadata } from "next";

import Collapse from "@/components/collapse";
import Prose from "@/components/prose";
import { titleSuffix } from "@/lib/const";

export const metadata: Metadata = {
  title: `Third-party licences ${titleSuffix}`,
};

export default function ThirdPartyLicence() {
  return (
    <>
      <Prose>
        <h1>Third-party licences</h1>
        <p>Thank you to all the projects which make this site possible!</p>
      </Prose>
      <Collapse title="DaisyUI">
        <Prose>
          <p>Copyright (c) 2020 Pouya Saadeghi</p>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Prose>
      </Collapse>
      <Collapse title="Font Awesome Free">
        <Prose>
          <p>Creative Commons Attribution 4.0 International Public License</p>
          <p>
            By exercising the Licensed Rights (defined below), You accept and
            agree to be bound by the terms and conditions of this Creative
            Commons Attribution 4.0 International Public License ("Public
            License"). To the extent this Public License may be interpreted as a
            contract, You are granted the Licensed Rights in consideration of
            Your acceptance of these terms and conditions, and the Licensor
            grants You such rights in consideration of benefits the Licensor
            receives from making the Licensed Material available under these
            terms and conditions.
          </p>
          <h3>Section 1 -- Definitions.</h3>
          <ol className="list-none">
            <li>
              a. Adapted Material means material subject to Copyright and
              Similar Rights that is derived from or based upon the Licensed
              Material and in which the Licensed Material is translated,
              altered, arranged, transformed, or otherwise modified in a manner
              requiring permission under the Copyright and Similar Rights held
              by the Licensor. For purposes of this Public License, where the
              Licensed Material is a musical work, performance, or sound
              recording, Adapted Material is always produced where the Licensed
              Material is synched in timed relation with a moving image.
            </li>
            <li>
              b. Adapter's License means the license You apply to Your Copyright
              and Similar Rights in Your contributions to Adapted Material in
              accordance with the terms and conditions of this Public License.
            </li>
            <li>
              c. Copyright and Similar Rights means copyright and/or similar
              rights closely related to copyright including, without limitation,
              performance, broadcast, sound recording, and Sui Generis Database
              Rights, without regard to how the rights are labeled or
              categorized. For purposes of this Public License, the rights
              specified in Section 2(b)(1)-(2) are not Copyright and Similar
              Rights.
            </li>
            <li>
              d. Effective Technological Measures means those measures that, in
              the absence of proper authority, may not be circumvented under
              laws fulfilling obligations under Article 11 of the WIPO Copyright
              Treaty adopted on December 20, 1996, and/or similar international
              agreements.
            </li>
            <li>
              e. Exceptions and Limitations means fair use, fair dealing, and/or
              any other exception or limitation to Copyright and Similar Rights
              that applies to Your use of the Licensed Material.
            </li>
            <li>
              f. Licensed Material means the artistic or literary work,
              database, or other material to which the Licensor applied this
              Public License.
            </li>
            <li>
              g. Licensed Rights means the rights granted to You subject to the
              terms and conditions of this Public License, which are limited to
              all Copyright and Similar Rights that apply to Your use of the
              Licensed Material and that the Licensor has authority to license.
            </li>
            <li>
              h. Licensor means the individual(s) or entity(ies) granting rights
              under this Public License.
            </li>
            <li>
              i. Share means to provide material to the public by any means or
              process that requires permission under the Licensed Rights, such
              as reproduction, public display, public performance, distribution,
              dissemination, communication, or importation, and to make material
              available to the public including in ways that members of the
              public may access the material from a place and at a time
              individually chosen by them.
            </li>
            <li>
              j. Sui Generis Database Rights means rights other than copyright
              resulting from Directive 96/9/EC of the European Parliament and of
              the Council of 11 March 1996 on the legal protection of databases,
              as amended and/or succeeded, as well as other essentially
              equivalent rights anywhere in the world.
            </li>
            <li>
              k. You means the individual or entity exercising the Licensed
              Rights under this Public License. Your has a corresponding
              meaning.
            </li>
          </ol>

          <h3>Section 2 -- Scope.</h3>
          <ol className="list-none">
            <li>
              a. License grant.
              <ol className="list-none">
                <li>
                  1. Subject to the terms and conditions of this Public License,
                  the Licensor hereby grants You a worldwide, royalty-free,
                  non-sublicensable, non-exclusive, irrevocable license to
                  exercise the Licensed Rights in the Licensed Material to:
                  <ol className="list-none">
                    <li>
                      a. reproduce and Share the Licensed Material, in whole or
                      in part; and
                    </li>
                    <li>b. produce, reproduce, and Share Adapted Material.</li>
                  </ol>
                </li>
                <li>
                  2. Exceptions and Limitations. For the avoidance of doubt,
                  where Exceptions and Limitations apply to Your use, this
                  Public License does not apply, and You do not need to comply
                  with its terms and conditions.
                </li>
                <li>
                  3. Term. The term of this Public License is specified in
                  Section 6(a).
                </li>
                <li>
                  4. Media and formats; technical modifications allowed. The
                  Licensor authorizes You to exercise the Licensed Rights in all
                  media and formats whether now known or hereafter created, and
                  to make technical modifications necessary to do so. The
                  Licensor waives and/or agrees not to assert any right or
                  authority to forbid You from making technical modifications
                  necessary to exercise the Licensed Rights, including technical
                  modifications necessary to circumvent Effective Technological
                  Measures. For purposes of this Public License, simply making
                  modifications authorized by this Section 2(a) (4) never
                  produces Adapted Material.
                </li>
                <li>
                  5. Downstream recipients. a. Offer from the Licensor --
                  Licensed Material. Every recipient of the Licensed Material
                  automatically receives an offer from the Licensor to exercise
                  the Licensed Rights under the terms and conditions of this
                  Public License. b. No downstream restrictions. You may not
                  offer or impose any additional or different terms or
                  conditions on, or apply any Effective Technological Measures
                  to, the Licensed Material if doing so restricts exercise of
                  the Licensed Rights by any recipient of the Licensed Material.
                </li>
                <li>
                  6. No endorsement. Nothing in this Public License constitutes
                  or may be construed as permission to assert or imply that You
                  are, or that Your use of the Licensed Material is, connected
                  with, or sponsored, endorsed, or granted official status by,
                  the Licensor or others designated to receive attribution as
                  provided in Section 3(a)(1)(A)(i).
                </li>
              </ol>
            </li>
            <li>
              b. Other rights.
              <ol className="list-none">
                <li>
                  1. Moral rights, such as the right of integrity, are not
                  licensed under this Public License, nor are publicity,
                  privacy, and/or other similar personality rights; however, to
                  the extent possible, the Licensor waives and/or agrees not to
                  assert any such rights held by the Licensor to the limited
                  extent necessary to allow You to exercise the Licensed Rights,
                  but not otherwise.
                </li>
                <li>
                  2. Patent and trademark rights are not licensed under this
                  Public License.
                </li>
                <li>
                  3. To the extent possible, the Licensor waives any right to
                  collect royalties from You for the exercise of the Licensed
                  Rights, whether directly or through a collecting society under
                  any voluntary or waivable statutory or compulsory licensing
                  scheme. In all other cases the Licensor expressly reserves any
                  right to collect such royalties.
                </li>
              </ol>
            </li>
          </ol>

          <h3>Section 3 -- License Conditions.</h3>
          <p>
            Your exercise of the Licensed Rights is expressly made subject to
            the following conditions.
          </p>
          <ol className="list-none">
            <li>
              a. Attribution.
              <ol className="list-none">
                <li>
                  1. If You Share the Licensed Material (including in modified
                  form), You must:
                  <ol className="list-none">
                    <li>
                      a. retain the following if it is supplied by the Licensor
                      with the Licensed Material:
                      <ol className="list-none">
                        <li>
                          i. identification of the creator(s) of the Licensed
                          Material and any others designated to receive
                          attribution, in any reasonable manner requested by the
                          Licensor (including by pseudonym if designated);
                        </li>
                        <li>ii. a copyright notice;</li>
                        <li>
                          iii. a notice that refers to this Public License;
                        </li>
                        <li>
                          iv. a notice that refers to the disclaimer of
                          warranties;
                        </li>
                        <li>
                          v. a URI or hyperlink to the Licensed Material to the
                          extent reasonably practicable;
                        </li>
                      </ol>
                    </li>
                    <li>
                      b. indicate if You modified the Licensed Material and
                      retain an indication of any previous modifications; and
                    </li>
                    <li>
                      c. indicate the Licensed Material is licensed under this
                      Public License, and include the text of, or the URI or
                      hyperlink to, this Public License.
                    </li>
                  </ol>
                </li>
                <li>
                  2. You may satisfy the conditions in Section 3(a)(1) in any
                  reasonable manner based on the medium, means, and context in
                  which You Share the Licensed Material. For example, it may be
                  reasonable to satisfy the conditions by providing a URI or
                  hyperlink to a resource that includes the required
                  information.
                </li>
                <li>
                  3. If requested by the Licensor, You must remove any of the
                  information required by Section 3(a)(1)(A) to the extent
                  reasonably practicable.
                </li>
                <li>
                  4. If You Share Adapted Material You produce, the Adapter's
                  License You apply must not prevent recipients of the Adapted
                  Material from complying with this Public License.
                </li>
              </ol>
            </li>
          </ol>

          <h3>Section 4 -- Sui Generis Database Rights.</h3>
          <p>
            Where the Licensed Rights include Sui Generis Database Rights that
            apply to Your use of the Licensed Material:
          </p>
          <ol className="list-none">
            <li>
              a. for the avoidance of doubt, Section 2(a)(1) grants You the
              right to extract, reuse, reproduce, and Share all or a substantial
              portion of the contents of the database;
            </li>
            <li>
              b. if You include all or a substantial portion of the database
              contents in a database in which You have Sui Generis Database
              Rights, then the database in which You have Sui Generis Database
              Rights (but not its individual contents) is Adapted Material; and
            </li>
            <li>
              c. You must comply with the conditions in Section 3(a) if You
              Share all or a substantial portion of the contents of the
              database.
            </li>
          </ol>
          <p>
            For the avoidance of doubt, this Section 4 supplements and does not
            replace Your obligations under this Public License where the
            Licensed Rights include other Copyright and Similar Rights.
          </p>

          <h3>
            Section 5 -- Disclaimer of Warranties and Limitation of Liability.
          </h3>
          <ol className="list-none">
            <li>
              a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
              EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
              AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
              ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
              IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
              WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
              ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
              KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
              ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.
            </li>
            <li>
              b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
              TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
              NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
              INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
              COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
              USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
              DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
              IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.
            </li>
            <li>
              c. The disclaimer of warranties and limitation of liability
              provided above shall be interpreted in a manner that, to the
              extent possible, most closely approximates an absolute disclaimer
              and waiver of all liability.
            </li>
          </ol>

          <h3>Section 6 -- Term and Termination.</h3>
          <ol className="list-none">
            <li>
              a. This Public License applies for the term of the Copyright and
              Similar Rights licensed here. However, if You fail to comply with
              this Public License, then Your rights under this Public License
              terminate automatically.
            </li>
            <li>
              b. Where Your right to use the Licensed Material has terminated
              under Section 6(a), it reinstates:
              <ol className="list-none">
                <li>
                  1. automatically as of the date the violation is cured,
                  provided it is cured within 30 days of Your discovery of the
                  violation; or
                </li>
                <li>2. upon express reinstatement by the Licensor.</li>
              </ol>
              For the avoidance of doubt, this Section 6(b) does not affect any
              right the Licensor may have to seek remedies for Your violations
              of this Public License.
            </li>
            <li>
              c. For the avoidance of doubt, the Licensor may also offer the
              Licensed Material under separate terms or conditions or stop
              distributing the Licensed Material at any time; however, doing so
              will not terminate this Public License.
            </li>
            <li>
              d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
              License.
            </li>
          </ol>

          <h3>Section 7 -- Other Terms and Conditions.</h3>
          <ol className="list-none">
            <li>
              a. The Licensor shall not be bound by any additional or different
              terms or conditions communicated by You unless expressly agreed.
            </li>
            <li>
              b. Any arrangements, understandings, or agreements regarding the
              Licensed Material not stated herein are separate from and
              independent of the terms and conditions of this Public License.
            </li>
          </ol>

          <h3>Section 8 -- Interpretation.</h3>
          <ol className="list-none">
            <li>
              a. For the avoidance of doubt, this Public License does not, and
              shall not be interpreted to, reduce, limit, restrict, or impose
              conditions on any use of the Licensed Material that could lawfully
              be made without permission under this Public License.
            </li>
            <li>
              b. To the extent possible, if any provision of this Public License
              is deemed unenforceable, it shall be automatically reformed to the
              minimum extent necessary to make it enforceable. If the provision
              cannot be reformed, it shall be severed from this Public License
              without affecting the enforceability of the remaining terms and
              conditions.
            </li>
            <li>
              c. No term or condition of this Public License will be waived and
              no failure to comply consented to unless expressly agreed to by
              the Licensor.
            </li>
            <li>
              d. Nothing in this Public License constitutes or may be
              interpreted as a limitation upon, or waiver of, any privileges and
              immunities that apply to the Licensor or You, including from the
              legal processes of any jurisdiction or authority.
            </li>
          </ol>
        </Prose>
      </Collapse>
      <Collapse title="Lato">
        <Prose>
          <p>
            Copyright (c) 2010-2014 by tyPoland Lukasz Dziedzic
            (team@latofonts.com) with Reserved Font Name "Lato"
          </p>
          <p>
            This Font Software is licensed under the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openfontlicense.org/open-font-license-official-text/"
            >
              SIL Open Font License, Version 1.1
            </a>
            . This license is copied below, and is also available with a FAQ at:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openfontlicense.org"
            >
              https://openfontlicense.org
            </a>
          </p>
          <p>SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007</p>
          <h3>PREAMBLE</h3>
          <p>
            The goals of the Open Font License (OFL) are to stimulate worldwide
            development of collaborative font projects, to support the font
            creation efforts of academic and linguistic communities, and to
            provide a free and open framework in which fonts may be shared and
            improved in partnership with others.
          </p>
          <p>
            The OFL allows the licensed fonts to be used, studied, modified and
            redistributed freely as long as they are not sold by themselves. The
            fonts, including any derivative works, can be bundled, embedded,
            redistributed and/or sold with any software provided that any
            reserved names are not used by derivative works. The fonts and
            derivatives, however, cannot be released under any other type of
            license. The requirement for fonts to remain under this license does
            not apply to any document created using the fonts or their
            derivatives.
          </p>
          <h3>DEFINITIONS</h3>
          <p>
            "Font Software" refers to the set of files released by the Copyright
            Holder(s) under this license and clearly marked as such. This may
            include source files, build scripts and documentation.
          </p>
          <p>
            "Reserved Font Name" refers to any names specified as such after the
            copyright statement(s).
          </p>
          <p>
            "Original Version" refers to the collection of Font Software
            components as distributed by the Copyright Holder(s).
          </p>
          <p>
            "Modified Version" refers to any derivative made by adding to,
            deleting, or substituting -- in part or in whole -- any of the
            components of the Original Version, by changing formats or by
            porting the Font Software to a new environment.
          </p>
          <p>
            "Author" refers to any designer, engineer, programmer, technical
            writer or other person who contributed to the Font Software.
          </p>
          <h3>PERMISSION &amp; CONDITIONS</h3>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of the Font Software, to use, study, copy, merge,
            embed, modify, redistribute, and sell modified and unmodified copies
            of the Font Software, subject to the following conditions:
          </p>
          <ul>
            <li>
              Neither the Font Software nor any of its individual components, in
              Original or Modified Versions, may be sold by itself.
            </li>
            <li>
              Original or Modified Versions of the Font Software may be bundled,
              redistributed and/or sold with any software, provided that each
              copy contains the above copyright notice and this license. These
              can be included either as stand-alone text files, human-readable
              headers or in the appropriate machine-readable metadata fields
              within text or binary files as long as those fields can be easily
              viewed by the user.
            </li>
            <li>
              No Modified Version of the Font Software may use the Reserved Font
              Name(s) unless explicit written permission is granted by the
              corresponding Copyright Holder. This restriction only applies to
              the primary font name as presented to the users.
            </li>

            <li>
              The name(s) of the Copyright Holder(s) or the Author(s) of the
              Font Software shall not be used to promote, endorse or advertise
              any Modified Version, except to acknowledge the contribution(s) of
              the Copyright Holder(s) and the Author(s) or with their explicit
              written permission.
            </li>
            <li>
              The Font Software, modified or unmodified, in part or in whole,
              must be distributed entirely under this license, and must not be
              distributed under any other license. The requirement for fonts to
              remain under this license does not apply to any document created
              using the Font Software.
            </li>
          </ul>

          <h3>TERMINATION</h3>
          <p>
            This license becomes null and void if any of the above conditions
            are not met.
          </p>
          <h3>DISCLAIMER</h3>
          <p>
            THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN
            NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES
            OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT,
            INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF
            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR
            INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE
            FONT SOFTWARE.
          </p>
        </Prose>
      </Collapse>
      <Collapse title="TailwindCSS">
        <Prose>
          <p>Copyright (c) Tailwind Labs, Inc.</p>
          <p>
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </p>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </Prose>
      </Collapse>
    </>
  );
}
