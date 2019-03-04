import React from 'react';

import bigImg from '../jesse975.webp';
import smallImg from '../jesse512.png';

export default () => (
	<>
		<header>
			<h1>
				<a href="/">Jesse Hattabaugh </a>💻🚲☕
			</h1>
		</header>

		<article>
			<picture>
				<source
					srcSet={bigImg}
					media="(min-width: 512px)"
					type="image/webp"
				/>
				<img
					id="photo"
					src={smallImg}
					alt="Jesse Hattabaugh"
					className="round"
				/>
			</picture>

			<section>
				<h1>How'd'y do?</h1>

				<p>
					I'm an engineer with 18 years of experience building
					applications on the web platform and it's related
					technologies. I've worked deeply in every part of the stack
					from client facing web pages, to administrating database
					servers, to writing build scripts. I recently moved from San
					Francisco, to Portland and I'm searching for new problems to
					apply my skills to.
				</p>

				<strong>
					<a href="mailto:webmaster@jessehattabaugh.com">
						Get in touch!
					</a>
				</strong>
			</section>

			<section id="skills">
				<h2>Skills</h2>

				<dl>
					<dt>Javascript</dt>
					<dd>
						<ul>
							<li>Node.js</li>
							<li>ES6</li>
							<li>Object Composition</li>
							<li>Functional Reactive Programming</li>
						</ul>
					</dd>
					<dt>Build Tools</dt>
					<dd>
						<ul>
							<li>Webpack</li>
							<li>NPM</li>
							<li>Babel</li>
							<li>Browserify</li>
							<li>Shell.js</li>
							<li>ESLint</li>
							<li>Gulp</li>
							<li>Sass</li>
							<li>Stylus</li>
							<li>Uglify</li>
						</ul>
					</dd>
					<dt>DOM APIs</dt>
					<dd>
						<ul>
							<li>Fetch</li>
							<li>Promises</li>
							<li>Sockets</li>
							<li>Service Workers</li>
							<li>Workers</li>
							<li>Geolocation</li>
							<li>Canvas</li>
						</ul>
					</dd>
					<dt>View Libraries</dt>
					<dd>
						<ul>
							<li>ReactJS</li>
							<li>Backbone</li>
							<li>jQuery</li>
							<li>Web Components</li>
							<li>Knockout</li>
							<li>Angular</li>
							<li>Virtual-DOM</li>
						</ul>
					</dd>
					<dt>CSS Layout</dt>
					<dd>
						<ul>
							<li>Flexbox</li>
							<li>Media Queries</li>
							<li>Transforms</li>
							<li>Transitions</li>
							<li>Animations</li>
						</ul>
					</dd>
					<dt>Testing / CI</dt>
					<dd>
						<ul>
							<li>Karma</li>
							<li>Mocha</li>
							<li>Chai</li>
							<li>PhantomJS</li>
							<li>Tape</li>
							<li>Enzyme</li>
							<li>SinonJS</li>
							<li>TravisCI</li>
							<li>Github</li>
						</ul>
					</dd>
					<dt>Backend Apps</dt>
					<dd>
						<ul>
							<li>REST APIs</li>
							<li>Swagger</li>
							<li>AWS</li>
							<li>Lambda</li>
							<li>Heroku</li>
							<li>MongoDB</li>
							<li>Redis</li>
							<li>Firebase</li>
						</ul>
					</dd>
					<dt>Native Apps</dt>
					<dd>
						<ul>
							<li>Phonegap</li>
							<li>Apple App Store</li>
							<li>Google Play Store</li>
						</ul>
					</dd>
				</dl>
			</section>

			<section id="workHistory">
				<h2>Work History</h2>

				<h3>
					StudyBlue - Lead Frontend Developer{' '}
					<span>Nov 2016 - Dec 2017</span>
				</h3>
				<ul>
					<li>
						Led a team of frontend engineers to maintain the
						company’s web-based flashcard application.
					</li>
					<li>
						Overhauled the app’s legacy RequireJS-based build
						process to use Webpack.
					</li>
					<li>
						Improved site load time by enabling code-splitting,
						long-term caching, and CDN delivery.
					</li>
					<li>
						Mentored junior developers and conducted codereviews to
						improve code quality.
					</li>
					<li>
						Replaced the IntelliJ powered development environment
						with a livereloading process.
					</li>
					<li>
						Facilitated the integration of the site’s first React
						component inside the existing Backbone app.
					</li>
					<li>
						Conducted interviews and evaluated code challenges for
						the company’s open positions.
					</li>
				</ul>

				<h3>
					Planet Labs - Senior Frontend Developer{' '}
					<span>Aug 2015 - Oct 2016</span>
				</h3>
				<ul>
					<li>
						Implemented features of the company’s satellite imaging
						applications with ReactJS/Reflux.
					</li>
					<li>
						Developed build scripts to generate documentation for
						the company’s public APIs.
					</li>
					<li>
						Participated in daily scrums, and a Github based
						workflow using pull-requests and rebasing.
					</li>
					<li>
						Made use of ES6 and modern Web APIs like Promises and
						Fetch by using Babel, and Polyfill.io.
					</li>
					<li>Published updates to the company’s NPM packages.</li>
				</ul>

				<h3>
					Eveo - Senior Frontend Developer{' '}
					<span>Oct 2012 - Jun 2015</span>
				</h3>
				<ul>
					<li>
						Developed interactive presentations and mobile apps for
						major pharmaceutical brands.
					</li>
					<li>
						Set up NPM build systems using Gulp, Browserify, Jade,
						and Stylus.
					</li>
					<li>
						Constructed hybrid web apps for using Phonegap,
						KnockoutJS, and AngularJS.
					</li>
					<li>
						Lead a team of developers to complete projects and meet
						client requirements.
					</li>
					<li>
						Unit tested business logic to ensure quality using Mocha
						and Should.js.
					</li>
					<li>
						Managed Git branching strategy, NPM build process, and
						Heroku deployments.
					</li>
					<li>
						Triaged bugs in Jira, communicated with stakeholders on
						Basecamp.
					</li>
				</ul>

				<h3>
					CubeTree - Ruby on Rails Developer{' '}
					<span>Mar 2010 – Dec 2010</span>
				</h3>
				<ul>
					<li>
						Used Agile techniques to develop features for the
						company's Ruby on Rails app.
					</li>
					<li>
						Built front-end ui components with YUI and Web
						Standards.
					</li>
					<li>
						Used TDD to define business logic and prevent
						regressions in a weekly release cycle.
					</li>
					<li>Improved support for legacy browsers such as IE6.</li>
					<li>
						Retrofitted application for translation and
						localization.
					</li>
				</ul>

				<h3>
					CBS Interactive - Full Stack Developer{' '}
					<span>Aug 2008 – Oct 2009</span>
				</h3>
				<ul>
					<li>
						Maintained high traffic MVC application (TV.com) built
						with PHP and MySQL.
					</li>
					<li>
						Developed front-end controls using MooTools and jQuery.
					</li>
					<li>
						Wrote cron scripts for importing third party data from
						REST APIs.
					</li>
					<li>
						Integrated Facebook Connect with existing authentication
						system.
					</li>
				</ul>

				<h3>
					Fordela Inc - Full Stack Developer{' '}
					<span>May 2007 – May 2008</span>
				</h3>
				<ul>
					<li>
						Migrated the company’s white label video platform to
						CakePHP.
					</li>
					<li>
						Utilized SVN source control system to collaborate with a
						team of developers.
					</li>
					<li>Developed feed features using RSS and Atom feeds.</li>
					<li>Used jQuery to implement Ajax features.</li>
					<li>
						Worked with backend services engineers to design RESTful
						APIs.
					</li>
				</ul>

				<h3>
					Imagine That Design Studios - Full Stack Developer{' '}
					<span>Aug 2006 – Mar 2007</span>
				</h3>
				<ul>
					<li>
						Built a social networking system for the company’s
						travel website.
					</li>
					<li>Programmed in PHP using the CakePHP MVC framework.</li>
					<li>Designed and implemented MySQL schemas.</li>
					<li>
						Used SSH and SFTP to perform miscellaneous sysadmin
						duties.
					</li>
				</ul>
			</section>

			<section id="contact">
				<h2>How to contact me</h2>

				<h3>
					<a href="mailto:webmaster@jessehattabaugh.com">
						webmaster@jessehattabaugh.com
					</a>
				</h3>
				<h3>
					<a href="tel:(415) 684-8486">(415) 684-8486</a>
				</h3>
			</section>
		</article>

		<footer>&copy; 1982-2082 Jesse Hattabaugh</footer>
	</>
);
