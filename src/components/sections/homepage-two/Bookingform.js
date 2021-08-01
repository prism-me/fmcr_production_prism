import React, { Component } from 'react';

const year = `${new Date().getFullYear()}`;
const month = (new Date().getMonth() + 1).toString().length === 1 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`;
const day = (new Date().getDate()).toString().length === 1 ? `0${new Date().getDate()}` : `${new Date().getDate()}`;
const day2 = (new Date().getDate() + 1).toString().length === 1 ? `0${new Date().getDate() + 1}` : `${new Date().getDate() + 1}`;

class Bookingform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: `${year}-${month}-${day}`,
            checkOut: `${year}-${month}-${day2}`,
            adults: 1,
            rooms: 1,
            childs: 0,
            showCountPopup: false,
            showPromoPopup: false,
            chain: 27304,
            hotel: 31842,
            promo: '',
            checkOutMin:`${year}-${month}-${day2}`
        }
        this.wrapperRef = React.createRef();
        this.propmoWrapperRef = React.createRef();

        // this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }
     dateChange = (e) => {
        let cur = e.target.value;
        console.log(cur);

        let newDate =  this.nextDate(cur);
       // console.log(newDate);
         this.setState({  checkOut: newDate , checkIn: cur  });
        // this.setState(newDate);    //updating state for check-out date


    }
     nextDate(cur) {
        var currentdate = new Date(cur);
        let currMonth  = currentdate.getMonth()+1;
        if(currMonth <= 9){
            currMonth = '0' + currMonth;
        }
        console.log(currMonth);

        let currDate  = currentdate.getDate();
        if(currDate <= 9){
            currDate = '0' + (currDate+1);
        }
        else{
            currDate = currDate+1;
        }

        currDate = currDate.toString();
        console.log(currDate);

        var datetime =
            currentdate.getFullYear() +
            "-" +
            (currMonth) +
            "-" +
            (currDate)
         // this.setState({checkOut: datetime });
         // this.setState({  checkOut: datetime , checkIn: cur.target.value  });
        console.log(datetime);
        return datetime;
    }
    // handleCheckInChange = (e) => {
    //
    //     let today = e.target.value;
    //     let n = 1;
    //     let fudate = new Date(new Date(today).setDate(new Date(today).getDate() + n));
    //     fudate = fudate.getFullYear() +  '-' + (fudate.getMonth() + 1) + '-' + fudate.toDateString().substring(8, 10) ;
    //     this.setState({checkOut: fudate });
    //     this.setState({  checkOut: fudate , checkIn: e.target.value  });
    //     // console.log(this.state.checkOut);
    //     // debugger;
    // }
    handleCheckOutChange = (e) => {
        this.setState({ checkOut: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const finalURL = `https://be.synxis.com/?adult=${this.state.adults}&arrive=${this.state.checkIn}&chain=${this.state.chain}&child=${this.state.childs}&currency=EUR&depart=${this.state.checkOut}&hotel=${this.state.hotel}&level=hotel&locale=en-US&rooms=${this.state.rooms}&promo=${this.state.promo}`;

        window.gtag_report_conversion(finalURL);
        return;
        // window.open(finalURL, '_blank') || window.location.replace(finalURL);

    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({showCountPopup: false})
        }
        if (this.propmoWrapperRef && !this.propmoWrapperRef.current.contains(event.target)) {
            this.setState({showPromoPopup: false})
        }
    }


    render() {
        const { rooms, childs, adults, showCountPopup, showPromoPopup } = this.state;
        return (
            <section className="booking-form-hotizontal container d-none d-sm-block">
                <div className="container-fluid">
                    <div className="booking-form-inner">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="dates-group">
                                    <input onChange={this.dateChange} type="date" value={this.state.checkIn} className="form-control" placeholder="Check In" min={new Date().toISOString().split('T')[0]}></input>
                                    <span className="d-none d-sm-block">-</span>
                                    <input onChange={this.handleCheckOutChange} type="date" value={this.state.checkOut} min={this.state.checkOutMin} className="form-control" placeholder="Check Out" ></input>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="room-details"  ref={this.wrapperRef} onClick={() => this.setState({ showCountPopup: !showCountPopup, showPromoPopup: false })}>
                                    <div className="count-group">
                                        <p>{`${rooms} Room${rooms > 1 ? 's' : ''}`}</p>
                                        <p>{`${adults} Adult${adults > 1 ? 's' : ''}`}</p>
                                        <p>{`${childs} Child${childs > 1 ? 's' : ''}`}</p>
                                    </div>
                                    {
                                        showCountPopup ?
                                            <div onClick={(e)=> e.stopPropagation()} className="room-details-popup" style={{ display: showCountPopup ? 'block' : 'none' }}>
                                                <div className="room_item_box quantity">
                                                    <label>Rooms</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ rooms: rooms - 1 < 1 ? 1 : rooms - 1 })}>-</div>
                                                        <input id="Room" type="text" min="1" className="form-control" defaultValue={rooms} value={rooms} name="Rooms" placeholder="" required="" data-rel="rooms" />
                                                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ rooms: rooms + 1 })}>+</div>
                                                    </div>
                                                </div>
                                                <div className="room_item_box quantity">
                                                    <label>Adults</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ adults: adults - 1 < 1 ? 1 : adults - 1 })}>-</div>
                                                        <input id="Adult" type="text" min="1" className="form-control" defaultValue={adults} value={adults} name="Adult" placeholder="" required="" data-rel="adults" />
                                                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ adults: adults + 1 })}>+</div>
                                                    </div>
                                                </div>
                                                <div className="room_item_box quantity">
                                                    <label>Children</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty" onClick={() => this.setState({ childs: childs - 1 < 1 ? 1 : childs - 1 })}>-</div>
                                                        <input id="Child" type="text" min="0" className="form-control" defaultValue={childs} value={childs} name="Child" placeholder="" required="" />
                                                        <div className="quantity-button quantity-up plus" onClick={() => this.setState({ childs: childs + 1 })}>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="promo-codes-wrapper" ref={this.propmoWrapperRef}  onClick={() => this.setState({ showPromoPopup: !showPromoPopup, showCountPopup: false })}>
                                    <div className="promo-codes">
                                        <p>Promo Codes</p>
                                    </div>
                                    <div className="promo-popup" onClick={(e)=> e.stopPropagation()} style={{ display: showPromoPopup ? 'flex' : 'none' }}>
                                        <div className="code-item">
                                            <label>Group Code/Promotion Code</label>
                                            <input type="text" onChange={(e) => this.setState({ promo: e.target.value })} className="form-control" />
                                        </div>
                                        <div className="code-item">
                                            <label>Travel Industry ID</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <button type="button" value={this.state.promo} onClick={this.handleSubmit} className="main-btn btn-eden">Book Now</button>
                            </div>
                        </div>
                    </div>
                    {/* <button className="main-btn w-100 btn-eden d-block my-5 d-sm-none">Book Now</button> */}

                </div>
            </section>

        );
    }
}

export default Bookingform;