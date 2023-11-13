import React from "react"
export default function Membership() {

    return(
        <div className="membership">
            <div className="container">
                <div className="membership__inner">

                    <div className="membership__card" id="basic">
                        <div className="card__title">Basic Membership</div>
                        <div className="card__benefits">
                                
                        </div>
                        <div className="card__price">
                            <span>Price:</span>
                            <div className="membership__price">
                               KZT 300K/ year
                            </div>
                            <button>Subscribe</button>
                        </div>
                        
                    </div>

                    <div className="membership__card" id="business">
                        <div className="card__title">Business Membership</div>
                        <div className="card__benefits">

                        </div>
                        <div className="card__price">
                            <span>Price:</span>
                            <div className="membership__price">
                                KZT 500K/ year
                            </div>
                            <button>Subscribe</button>
                        </div>
                        
                    </div>

                    <div className="membership__card" id="premium">
                        <div className="card__title">Premium Membership</div>
                        <div className="card__benefits">

                        </div>
                        <div className="card__price">
                            <span>Price:</span>
                            <div className="membership__price">
                                KZT 1KK/ year
                            </div>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}