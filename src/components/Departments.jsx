import './thoughts.css';
import { whatsapp } from "../assets/index.js";
import styles, { layout } from "../style.js";

const Departments = () => {
    return (
        <div className="home page-wrap">
            {/*<div className="grade md:mr-10 mr-0 md:mt-0  relative justify-center items-center" >*/}
            {/*    <div className="h-80 w-50">*/}
            {/*        /!* gradient start *!/*/}
            {/*        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />*/}
            {/*        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />*/}
            {/*        /!* gradient end *!/*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="popular-articles">

                <div className="popular-header z-[3]">
                    <h2 className="text-white z-[3] text-[32.4px] mb-[1.5rem] font-bold leading-[1.1]">More <br/>Than <br/> Philosophical Society </h2>
                    <p className="text-gray-300 z-[3]">Axiom<br/>
                        <a className="font-normal text-xs sm:text-sm text-[#0089c7]" href="#">NSUT</a>
                    </p>
                </div>

                <div className="mini-card-grid">

                    <article className="mini-card">
                        <strong className='text-rose-500'>Axiom</strong>
                        <h3 className="mini-card-title">
                            <a href="#"> Event Managment </a>
                        </h3>
                        <div className="tags">
                            <a href="#">Responsible for managing events</a>
                            </div>
                        <div className="author-row">
                            <a href="https://www.instagram.com/axiomnsut/">
                                <img alt={' '} src={whatsapp} className='avatar' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>
                            <a className="author-name" href="#">Dev Vats </a>
                        </div>
                    </article>

                    <article className="mini-card">
                    <strong className='text-rose-500'>Axiom</strong>
                        <h3 className="mini-card-title">
                            <a href="#">Tech Team</a>
                        </h3>
                        <div className="tags">
                            <a href="#" rel="tag">Building the tech prowess of Axiom</a></div>
                        <div className="author-row">
                            <a href="https://www.instagram.com/axiomnsut/"><img alt='' src={whatsapp}
                                                                    className='avatar avatar-80 photo' height='80'
                                                                    width='80' loading='lazy' decoding='async'/></a>
                            <a className="author-name" href="#">Kushagra Lakhwani </a>
                        </div>
                    </article>

                    <article className="mini-card">
                    <strong className='text-rose-500'>Axiom</strong>
                        <h3 className="mini-card-title">
                            <a href="#">Graphic Designing </a>
                        </h3>
                        <div className="tags">
                            <a href="#" rel="tag">Desiging the aesthetic of Axiom</a></div>
                        <div className="author-row">
                            <a href="https://www.instagram.com/axiomnsut/"><img alt='' src={whatsapp}
                                                                    className='avatar avatar-80 photo' height='80'
                                                                    width='80' loading='lazy' decoding='async'/></a>
                            <a className="author-name" href="#">Nikhil </a>
                        </div>
                    </article>

                    <article className="mini-card">
                    <strong className='text-rose-500'>Axiom</strong>
                        <h3 className="mini-card-title">
                            <a href="#">Content writing </a>
                        </h3>
                        <div className="tags">
                            <a href="https://instagram.com/axiomnsut/" rel="tag">The writers room of Axiom</a></div>
                        <div className="author-row">
                            <a href="https://instagram.com/axiomnsut/">
                                <img alt={' '}
                                     src='https://secure.gravatar.com/avatar/1a1b5ca4b139c0c8caaea26ef437d943?s=80&#038;d=retro&#038;r=pg'
                                     className='avatar avatar-80 photo' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>

                            <a className="author-name" href="https://instagram.com/axiomnsut/">
                                Shrey Paul </a>
                        </div>
                    </article>

                    <article className="mini-card">
                    <strong className='text-rose-500'>Axiom</strong>
                        <h3 className="mini-card-title">
                            <a href="https://css-tricks.com/6-common-svg-fails-and-how-to-fix-them/">
                                Video editing </a>
                        </h3>


                        <div className="tags">
                            <a href="https://css-tricks.com/tag/svg/" rel="tag">SVG</a></div>

                        <div className="author-row">
                            <a href="https://css-tricks.com/author/marianabeldi/"
                               aria-label="Author page of Mariana Beldi">
                                <img alt=''
                                     src='https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=80&#038;d=retro&#038;r=pg'
                                     srcSet='https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&#038;d=retro&#038;r=pg 2x'
                                     className='avatar avatar-80 photo' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>

                            <a className="author-name" href="https://css-tricks.com/author/marianabeldi/">
                                Mariana Beldi </a>
                        </div>

                    </article>
                    <article className="mini-card">
                    <strong className='text-rose-500'>Axiom</strong>

                        <h3 className="mini-card-title">
                            <a href="https://css-tricks.com/faking-min-width-on-a-table-column/">
                                Public Relation </a>
                        </h3>
                        <div className="tags">
                            <a href="https://css-tricks.com/tag/col/" rel="tag">col</a> <a
                            href="https://css-tricks.com/tag/table-layout/" rel="tag">table-layout</a> <a
                            href="https://css-tricks.com/tag/tables/" rel="tag">tables</a></div>

                        <div className="author-row">
                            <a href="https://css-tricks.com/author/anderspedersen/"
                               aria-label="Author page of Anders Pedersen">
                                <img alt=''
                                     src='https://secure.gravatar.com/avatar/d865091f165939a9d7339d2326f1bcaa?s=80&#038;d=retro&#038;r=pg'
                                     srcSet='https://secure.gravatar.com/avatar/d865091f165939a9d7339d2326f1bcaa?s=160&#038;d=retro&#038;r=pg 2x'
                                     className='avatar avatar-80 photo' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>

                            <a className="author-name" href="https://css-tricks.com/author/anderspedersen/">
                                Anders Pedersen </a>
                        </div>

                    </article>
                    <article className="mini-card">
                        <time dateTime="2023-01-27" title="Originally published Jan 27, 2023">
                            <strong >
                                Axiom
                            </strong><br/>
                            on
                            Jan 27, 2023
                        </time>

                        <h3 className="mini-card-title">
                            <a href="https://css-tricks.com/ar-vr-and-a-model-for-3d-in-html/">
                                Content Creation </a>
                        </h3>


                        <div className="tags">
                            <a href="https://css-tricks.com/tag/augmented-reality/" rel="tag">augmented reality</a> <a
                            href="https://css-tricks.com/tag/model/" rel="tag">model</a></div>

                        <div className="author-row">
                            <a href="https://css-tricks.com/author/geoffgraham/"
                               aria-label="Author page of Geoff Graham">
                                <img alt=''
                                     src='https://secure.gravatar.com/avatar/1a1b5ca4b139c0c8caaea26ef437d943?s=80&#038;d=retro&#038;r=pg'
                                     srcSet='https://secure.gravatar.com/avatar/1a1b5ca4b139c0c8caaea26ef437d943?s=160&#038;d=retro&#038;r=pg 2x'
                                     className='avatar avatar-80 photo' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>

                            <a className="author-name" href="https://css-tricks.com/author/geoffgraham/">
                                Geoff Graham </a>
                        </div>

                    </article>
                    <article className="mini-card">
                        <time dateTime="2018-12-18" title="Originally published Dec 18, 2018">
                            <strong>
                                Axiom
                            </strong><br/>
                            on
                            Dec 18, 2018
                        </time>

                        <h3 className="mini-card-title">
                            <a href="https://css-tricks.com/ease-y-breezy-a-primer-on-easing-functions/">
                                Sponsorship </a>
                        </h3>


                        <div className="tags">
                            <a href="https://css-tricks.com/tag/animation/" rel="tag">animation</a> <a
                            href="https://css-tricks.com/tag/easing/" rel="tag">easing</a></div>

                        <div className="author-row">
                            <a href="https://css-tricks.com/author/pavithrakodmad/"
                               aria-label="Author page of Pavithra Kodmad">
                                <img alt=''
                                     src='https://secure.gravatar.com/avatar/62a8222c733d88ed97226e7c305851e3?s=80&#038;d=retro&#038;r=pg'
                                     srcSet='https://secure.gravatar.com/avatar/62a8222c733d88ed97226e7c305851e3?s=160&#038;d=retro&#038;r=pg 2x'
                                     className='avatar avatar-80 photo' height='80' width='80' loading='lazy'
                                     decoding='async'/>
                            </a>

                            <a className="author-name" href="https://css-tricks.com/author/pavithrakodmad/">
                                Pavithra Kodmad </a>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
}
export default Departments;