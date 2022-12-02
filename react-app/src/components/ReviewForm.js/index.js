import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect, useParams } from "react-router-dom";
import * as reviewActions from "../../store/review"
import * as businessActions from "../../store/business"
import "./ReviewForm.css"

const ReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const { bizId } = useParams()

    const [review_content, setReviewContent] = useState("");
    const [stars, setStars] = useState("");
    const [errors, setErrors] = useState({});

    const businessById = useSelector((state) => {
        return state?.business?.businessById
    })

    // console.log(businessById)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const review = {
            review_content: review_content,
            stars: stars
        }

        const createdReview = await dispatch(reviewActions.createReview(review, bizId))

        // console.log(createdreview)

        if (createdReview.errors) setErrors(createdReview.errors)
        else {
            await dispatch(reviewActions.cleanUpReviews())
            history.push(`/biz/${bizId}`)
        }
    }

    useEffect(() => {
        dispatch(businessActions.getCurrBusiness(bizId))
    }, [dispatch]);

    if (!user) {
        return <Redirect to='/login' />;
    }

    if (!businessById) {
        return null
    }

    return (
        <div className="create-review-page">
            <div className="create-review-container-body">
                <div className="create-review-container-title">
                    {businessById.business_name}
                </div>
                <form onSubmit={handleSubmit} className="create-review-form-box">
                    <div className='create-review-inputs'>
                        <div class="rate">
                            <input type="radio" id="star5" name="rate" value={5} onChange={(e) => setStars(e.target.value)} />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value={4} onChange={(e) => setStars(e.target.value)} />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value={3} onChange={(e) => setStars(e.target.value)} />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value={2} onChange={(e) => setStars(e.target.value)} />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value={1} onChange={(e) => setStars(e.target.value)} />
                            <label for="star1" title="text">1 star</label>
                        </div>
                        <div className="create-review-input-cards ">
                            <textarea
                                type="text"
                                value={review_content}
                                onChange={(e) => setReviewContent(e.target.value)}
                                // required
                                placeholder="Lorem ipsum dolor sit amet, at ferri doming semper eum, ut his nonumy putent vituperata, te hinc duis sadipscing usu. At persequeris necessitatibus mel, esse prima contentiones vel te, eum illum dicant torquatos id. Unum vide ullum in per. Pri errem constituto ut. No eum forensibus dissentiunt, vel te errem legere. Mei viris numquam maiorum id, detracto vulputate et vim, dico augue graecis at nec. Eam alia solum assentior ex. Ne soleat blandit sed, tation posidonium cum ex. Brute perpetua senserit eu vel. Sed rebum graeco aliquip id, assum nostrud detraxit has at. Sint partiendo abhorreant ius cu, no soluta graece gloriatur pro. Esse maiorum dignissim his id. Ea torquatos consetetur est, nec no summo splendide philosophia. Fabulas debitis minimum an nec, solum docendi per te. Vix at dicant persecuti conceptam, nemore ornatus signiferumque in usu, graece facete animal ex quo. Eu delenit inciderint usu, his ne dicat electram, eu has quem saperet. Et amet omittam per, vide oporteat ex pro, oporteat abhorreant complectitur eu qui. Mel ea latine iuvaret, et fuisset nostrum qui. Ea tincidunt intellegam consectetuer sea, ex pri veri singulis voluptatibus. Ex pro labores praesent, mea ei iudico nonumy nominavi. Accumsan salutandi pri ad, no omnis illud his. Solum tincidunt ex duo, ut eum probo ludus. Maiestatis assueverit his ut, purto docendi sapientem mea in, tempor tractatos per et. Vel ad enim labores deserunt. In maiorum volumus eum, ut est case lobortis scribentur."
                                className="create-review-text-field"
                            />
                            {/* <div>{errors.address}</div> */}
                        </div>
                    </div>
                    <div className="create-review-button-div">
                        <button type="submit" className="create-review-submit-button">Post Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
