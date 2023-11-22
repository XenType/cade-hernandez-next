import { PagePath } from "@/components/enum";
import FormattedLink from "@/components/content/common/formatted-link";
import Indentation from "@/components/content/common/indentation";
import ProjectItem from "@/components/content/common/project-item";

const ProjectsContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-16 -mt-6 md:mt-2">
      <div className="flex flex-col space-y-4 w-full bg-gradient-to-l from-white/60 to-yellow-500/40 border border-yellow-500 border-2 rounded-md p-2 drop-shadow-md">
        <div className="flex flex-col space-y-2 items-center md:flex-row md:justify-around md:space-y-0 md:space-x-8">
          <div className="bg-white/60 rounded-md drop-shadow-lg p-4 border border-white md:max-w-[500px]">
            <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
              Current Projects
            </div>
            <div>
              <Indentation />I try to keep a few projects going at all times -
              especially having a backlog of ideas I would love to work through!
              <br />
              <br />
              <Indentation />
              From my first production mobile game to joining up with my husband
              to start an online store, here's a list of work I currently have
              in progress:
            </div>
          </div>
          <div>
            <ul className="list-none">
              <ProjectItem type="mobile-game" title="Chromergence">
                A 2D puzzle game based on mixing colors of light to achieve a
                goal. Expected launch in early 2024.
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="website" title="ZoCa Pet">
                <div>
                  A collaborative project allowing me to use years of e-commerce
                  experience to generate passive income. Visit us at{" "}
                  <FormattedLink
                    href="https://www.zocapet.com"
                    title="ZoCa Pet Store"
                    newTab
                  >
                    www.zocapet.com
                  </FormattedLink>
                  . We are online and will be starting up our marketing
                  campaigns soon!
                </div>
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="employment" title="Contract / Full-Time">
                <div>
                  Having recently moved to the Los Angeles area and achiving a
                  degree of "settling in", I've started to actively seek
                  Contract or Full-Time employment as a Software Engineer or
                  Engineering Manager. Please reach out and{" "}
                  <FormattedLink href={PagePath.CONNECT} title="Contact">
                    make a connection
                  </FormattedLink>
                  .
                </div>
              </ProjectItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full bg-gradient-to-r from-white/60 to-lime-600/30 border border-lime-600 border-2 rounded-md p-2 drop-shadow-md">
        <div className="flex flex-col space-y-2 items-center md:flex-row-reverse md:justify-around md:space-y-0 md:space-x-8">
          <div className="bg-white/60 rounded-md drop-shadow-lg p-4 border border-white md:max-w-[500px] md:min-w-[350px]">
            <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
              Open-Source / Examples
            </div>
            <div>
              <Indentation />
              Much of my past work is proprietary, so the source code is not
              available to view. I've assembled some examples you can see,
              though!
              <br />
              <br />
              <Indentation />
              From this website to a game I created as I was learning to use
              Godot4 / GDScript - please feel free to browse any of these items
              that interest you.
            </div>
          </div>
          <div className="md:pr-8">
            <ul className="list-none">
              <ProjectItem type="website" title="CadeHernandez.com">
                <div>
                  This website was written in TypeScript with React and
                  TailwindCSS.
                </div>
                <div className="flex flex-row justify-around my-1">
                  <div className="bg-white/70 max-w-max px-2 rounded-sm drop-shadow-md">
                    <FormattedLink
                      href="https://github.com/XenType/cade-hernandez-dot-com"
                      title="View on GitHub"
                      newTab
                    >
                      View the source
                    </FormattedLink>{" "}
                    on GitHub
                  </div>
                </div>
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="mobile-game" title="Run Zeep Bop!">
                <div>
                  <div>
                    I created this simple, 2D game to learn some of the core
                    concepts of Godot 4 - an open-source game development
                    engine. This game is not a polished end-product, but an
                    example of how quickly I can jump into something new and
                    gain traction.
                  </div>
                  <div className="flex flex-row justify-around my-1">
                    <div className="bg-white/70 max-w-max px-2 rounded-sm drop-shadow-md">
                      <FormattedLink
                        href="https://github.com/XenType/RunZeepBop"
                        title="View on GitHub"
                        newTab
                      >
                        View the source
                      </FormattedLink>{" "}
                      on GitHub
                    </div>
                    <div className="bg-white/70 max-w-max px-2 rounded-sm drop-shadow-md">
                      <FormattedLink
                        href="https://cadehernandez.com/resources/RunZeepBop-Windows.zip"
                        title="Download Game"
                        newTab
                      >
                        Download
                      </FormattedLink>{" "}
                      the game
                    </div>
                  </div>
                  <div className="text-xs">
                    ** Note: While it was created to target a mobile device, the
                    downloadable example is compiled for Windows OS.
                  </div>
                </div>
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="npm" title="Test-Logic for Node.js">
                <div>
                  <div>
                    During a very length uplift project (JavaScript to
                    TypeScript), I found the need to reduce some commonly used
                    test patterns into smaller, more readable code. "Test-Logic"
                    is an NPM package I created that allowed me to refactor unit
                    and integration tests during the uplift, reducing the size
                    of most test files by at least 50% by eliminating
                    duplication. While not an "earth-shattering" node package,
                    it does still average at least 10 downloads / week four
                    years after it was created!
                  </div>
                  <div className="flex flex-row justify-around my-1">
                    <div className="bg-white/70 max-w-max px-2 rounded-sm drop-shadow-md">
                      <FormattedLink
                        href="https://www.npmjs.com/package/test-logic"
                        title="View on NPMjs"
                        newTab
                      >
                        View the package
                      </FormattedLink>{" "}
                      on NPMjs
                    </div>
                    <div className="bg-white/70 max-w-max px-2 rounded-sm drop-shadow-md">
                      <FormattedLink
                        href="https://github.com/XenType/test-logic"
                        title="View on GitHub"
                        newTab
                      >
                        View the source
                      </FormattedLink>{" "}
                      on GitHub
                    </div>
                  </div>
                </div>
              </ProjectItem>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full bg-gradient-to-l from-white/60 to-blue-500/40 border border-blue-500 border-2 rounded-md p-2 drop-shadow-md">
        <div className="flex flex-col space-y-2 items-center md:flex-row md:justify-around md:space-y-0 md:space-x-8">
          <div className="bg-white/60 rounded-md drop-shadow-lg p-4 border border-white md:max-w-[500px] md:min-w-[350px]">
            <div className="text-lg md:text-xl font-bold text-gray-600 mb-2">
              Goals & Developing Ideas
            </div>
            <div>
              <Indentation />
              More Games, a growing business, seeing the world and then helping
              to change it for the better! I have a lot to accomplish and I
              can't wait to get started on the items on this list.
              <br />
              <br />
              <Indentation />
              Interested in collaborating? Please let me know via email or text;
              both are available on the{" "}
              <FormattedLink
                href={PagePath.CONNECT}
                title="Connect With Me"
                newTab
              >
                Connect page
              </FormattedLink>
              .
            </div>
          </div>
          <div>
            <ul className="list-none">
              <ProjectItem type="desktop-game" title="Project OSIRIS">
                I've been brainstorming play mechanics and doing some early
                design of art assets for a 3D game that will mix elements of
                survival, civilization-building and factory genres into
                something that has never been seen before. Beyond that --- my
                lips are sealed!
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="website" title="ZoCa ...">
                <div>
                  We have no intention stopping with pet apparel and
                  accessories! Expect the ZoCa brand to expand in 2024,
                  incorporating fashion, health and more!
                </div>
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="travel" title="Eastern-bound">
                <div>
                  I've never left the Western Hemisphere (or North America)
                  before, and I think it is about time to do just that! In the
                  coming years I plan on visiting:
                  <div className="flex flex-row flex-wrap justify-center w-full max-w-[550px] m-auto">
                    <div className="m-3">Japan</div>
                    <div className="m-3">New Zealand</div>
                    <div className="m-3">England</div>
                    <div className="m-3">Scotland</div>
                    <div className="m-3">Paris</div>
                    <div className="m-3">The Netherlands</div>
                    <div className="m-3">Spain</div>
                    <div className="m-3">Germany</div>
                    <div className="m-3">and more!</div>
                  </div>
                </div>
              </ProjectItem>
              <hr className="border-white border-1" />
              <ProjectItem type="change" title="AI in Government">
                <div>
                  Governing bodies, from local to global, have yet to adopt new
                  technologies that could make life better for us all. LLM and
                  other AI models could be leveraged to aggregate the needs of a
                  constituency and then propose possible solutions based on
                  current technologies. Elected officials could spend more time
                  reviewing and perfecting these solutions without the initial
                  research and brainstorming that takes place today.
                </div>
              </ProjectItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
