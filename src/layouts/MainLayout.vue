<template>
  <q-layout view="hHh lpR fFf">
    <!-- RGPD Dialog -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog
        v-model="persistent"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card class="bg-primary text-white full-width">
          <q-card-section>
            <div class="text-h6">Cookies & Tracking</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            This site uses functional cookies and/or tracking cookies.<br />
            You have two choices. First one is to accept only functional cookies
            which are required for the basic usage of the website and the second
            possible option is to Accept All Cookies.<br />
            You can always change this option by accessing the RGPD Info and
            settings page.<br />
            Your choice is valid for one year or until you delete your browser
            cookies.<br />
            <a href="#" class="g_link_white" @click.prevent="dialog = true"
              >More info.</a
            >
          </q-card-section>

          <q-card-actions align="right" class="bg-dark q-pb-md q-pt-md">
            <q-btn
              flat
              color="primary"
              label="Accept Functional Cookies"
              v-close-popup
              @click="acceptFunctional"
            />
            <q-btn
              outline
              rounded
              color="accent"
              label="Accept All Cookies"
              v-close-popup
              @click="acceptAll"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="dialog"
        persistent
        maximized
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section class="q-pt-none">
            <h2>Privacy Policy</h2>

            <p>
              At this internet site, accessible from
              <a
                target="_blank"
                class="g_link_white"
                href="https://baskewitsch.lu"
                >https://baskewitsch.lu</a
              >, one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Alex Baskewitsch and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us. Our Privacy
              Policy was generated with the help of
              <a
                target="_blank"
                class="g_link_white"
                href="https://www.gdprprivacynotice.com/"
                >GDPR Privacy Policy Generator from GDPRPrivacyNotice.com</a
              >
            </p>

            <h3>General Data Protection Regulation (GDPR)</h3>
            <p>We are a Data Controller of your information.</p>

            <p>
              <a
                target="_blank"
                class="g_link_white"
                href="https://baskewitsch.lu"
                >https://baskewitsch.lu</a
              >
              legal basis for collecting and using the personal information
              described in this Privacy Policy depends on the Personal
              Information we collect and the specific context in which we
              collect the information:
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  class="g_link_white"
                  href="https://baskewitsch.lu"
                  >https://baskewitsch.lu</a
                >
                needs to perform a contract with you
              </li>
              <li>
                You have given
                <a
                  target="_blank"
                  class="g_link_white"
                  href="https://baskewitsch.lu"
                  >https://baskewitsch.lu</a
                >
                permission to do so
              </li>
              <li>
                Processing your personal information is in
                <a
                  target="_blank"
                  class="g_link_white"
                  href="https://baskewitsch.lu"
                  >https://baskewitsch.lu</a
                >
                legitimate interests
              </li>
              <li>
                <a
                  target="_blank"
                  class="g_link_white"
                  href="https://baskewitsch.lu"
                  >https://baskewitsch.lu</a
                >
                needs to comply with the law
              </li>
            </ul>

            <p>
              <a
                target="_blank"
                class="g_link_white"
                href="https://baskewitsch.lu"
                >https://baskewitsch.lu</a
              >
              will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your information to the extent necessary to comply
              with our legal obligations, resolve disputes, and enforce our
              policies.
            </p>

            <p>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. If you wish to be informed
              what Personal Information we hold about you and if you want it to
              be removed from our systems, please contact us.
            </p>
            <p>
              In certain circumstances, you have the following data protection
              rights:
            </p>
            <ul>
              <li>
                The right to access, update or to delete the information we have
                on you.
              </li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h3>Log Files</h3>

            <p>
              Alex Baskewitsch follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h3>Cookies and Web Beacons</h3>

            <p>
              Like any other website, Alex Baskewitsch uses 'cookies'. These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>

            <p>
              For more general information on cookies, please read
              <a
                target="_blank"
                class="g_link_white"
                href="https://www.privacypolicyonline.com/what-are-cookies/"
                >"What Are Cookies"</a
              >.
            </p>

            <h3>Privacy Policies</h3>

            <P
              >You may consult this list to find the Privacy Policy for each of
              the advertising partners of Alex Baskewitsch.</P
            >

            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Alex
              Baskewitsch, which are sent directly to users' browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>

            <p>
              Note that Alex Baskewitsch has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h3>Third Party Privacy Policies</h3>

            <p>
              Alex Baskewitsch's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.
            </p>

            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h3>Children's Information</h3>

            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p>
              Alex Baskewitsch does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>

            <h3>Online Privacy Policy Only</h3>

            <p>
              Our Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Alex Baskewitsch. This policy
              is not applicable to any information collected offline or via
              channels other than this website.
            </p>

            <h3>Consent</h3>

            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="side = !side"
          class="lt-lg"
          v-if="leftMode == true"
        />
        <q-toolbar-title>
          <span class="name" @click="link('/')">Alex Baskewitsch</span
          ><span class="dot">;</span>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="side = !side"
          class="lt-md"
          v-if="leftMode == false"
        />
        <q-toggle
          class="gt-sm"
          v-model="darkMode"
          icon="far fa-moon"
          color="accent"
          @input="toggleDarkMode()"
        ></q-toggle>
      </q-toolbar>

      <q-tabs align="center" class="gt-sm">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About me" />
        <q-route-tab to="/projects" label="Projects" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
      <div class="lower_header"></div>
    </q-header>
    <q-drawer
      v-model="side"
      :side="side_choice"
      overlay
      bordered
      content-class="column"
      class="blurry slower"
    >
      <!-- drawer content -->
      <div class="column justify_custom">
        <q-list bordered>
          <!-- These q-items contain a click function because the dark mode is buggy with the to prop -->
          <q-item clickable v-ripple @click="link('/')">
            <q-item-section avatar>
              <q-icon name="fas fa-home"></q-icon>
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple @click="link('/about')">
            <q-item-section avatar>
              <q-icon name="fas fa-user"></q-icon>
            </q-item-section>
            <q-item-section>About Me</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple @click="link('/projects')">
            <q-item-section avatar>
              <q-icon name="fas fa-tasks"></q-icon>
            </q-item-section>
            <q-item-section>Projects</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple @click="link('/contact')">
            <q-item-section avatar>
              <q-icon name="fas fa-paper-plane"></q-icon>
            </q-item-section>
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>
        <q-list bordered>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Dark Mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle
                color="accent"
                v-model="darkMode"
                val="mode"
                @input="toggleDarkMode()"
              ></q-toggle>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Left Hand Mode</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle
                color="accent"
                v-model="leftMode"
                val="mode"
                @input="toggleLeftMode()"
              ></q-toggle>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="text-caption">
          © 2021 - All Rights Reserved.
        </div>
      </div>
    </q-drawer>

    <q-page-container class="slower noflow">
      <transition enter-active-class="animated fadeInUpBig">
        <!-- Wrapping only one DOM element, defined by QBtn -->
        <router-view />
      </transition>
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <div class="upper_footer"></div>
      <q-toolbar>
        <q-toolbar-title
          ><q-btn flat @click="dialog = true" size="sm"
            >Legal info</q-btn
          ></q-toolbar-title
        >
        <div class="text-caption q-mr-xl gt-sm">
          © 2021 - Alex Baskewitsch - All Rights Reserved.
        </div>
        <q-btn
          flat
          round
          dense
          icon="fab fa-linkedin-in"
          type="a"
          href="https://www.linkedin.com/in/abask/"
          target="_blank"
        ></q-btn>
        <q-btn
          flat
          round
          dense
          icon="fab fa-github"
          type="a"
          href="https://github.com/Sashimee"
          target="_blank"
        ></q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { bootstrap } from "vue-gtag";

export default {
  data() {
    return {
      side: false,
      leftMode: false,
      darkMode: false,
      side_choice: "right",
      persistent: false,
      dialog: false,
      maximizedToggle: true
    };
  },
  methods: {
    acceptAll() {
      bootstrap().then(gtag => {
        this.$q.cookies.set("accepted_tracking_cookies", true, {
          expires: 365,
          sameSite: "Strict"
        });
        this.$gtag.pageview({
          page_path: this.$route.path // For the first tracking
        });
      });
    },
    acceptFunctional() {
      console.log("Functional accepted");
      this.$q.cookies.set("accepted_tracking_cookies", false, {
        expires: 365,
        sameSite: "Strict"
      });
    },
    link(target) {
      this.$router.push(target).catch(err => {});
    },
    toggleLeftMode() {
      // If it was enabled change the prop value
      if (this.leftMode == true) {
        this.side_choice = "left";
        return;
      }
      // else just set it as it was
      this.side_choice = "right";
    },
    toggleDarkMode() {
      this.$q.dark.toggle();
    }
  },
  mounted() {
    this.toggleDarkMode();
    this.darkMode = true;
    if (!this.$q.cookies.has("accepted_tracking_cookies")) {
      this.persistent = true;
    }
  }
};
</script>

<style lang="sass">
.g_link_white
  color: white
.g_link_black
  color: white

.name
  font-family: 'lexend'
  text-transform: uppercase
  cursor: pointer
.dot
  color: $accent

//Styling divs

.lower_header
  position: absolute
  width: 0
  height: 0
  border-top: 24px solid $primary
  border-right: 100vw solid transparent

.upper_footer
  position: absolute
  top: -23px
  width: 0
  height: 0
  border-bottom: 24px solid $primary
  border-left: 100vw solid transparent

// Custom class because justify-between does just not work
.justify_custom
  justify-content: space-between
  height: 100%
  margin: 2rem 1rem
  padding: 1rem
  border: 1px solid $primary
  border-radius: 3px
  // background-color: lighten($primary, 75)
.slower
  --animate-duration: 0.6s
.noflow
  overflow: hidden
</style>
