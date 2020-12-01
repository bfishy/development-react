import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FilteredList from './FilteredList.js';
import CourseCart from './CourseCart.js';

// a list of courses for display
const courseList = [
  { name: "UI/UX", num: "CSCI 1300", writ: false, department: "CS", time: 10, teaching: "Remote", img: "https://sigmatelecom.com/wp-content/uploads/2019/06/blogimages-1.jpg"},
  { name: "Database Management Systems", num: "CSCI 1270", writ: false, department: "CS", time: 14.5, teaching: "Remote", img: "https://penmypaper.com/blog/wp-content/uploads/2020/05/Database-management-system.png"},
  { name: "Intro to Public Humanities", num: "AMST 2650", writ: false, department: "Economics", time: 6, teaching: "Hybrid", img: "https://magazine.wellesley.edu/sites/magazine/files/styles/feature_and_article/public/imported_files/Winter_2018_images/final2%20bg_0.jpg"},
  { name: "Cybersecurity & IR", num: "CSCI 1800", writ: true, department: "CS", time: 4, teaching: "Hybrid", img: "https://www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg"},
  { name: "Financial Accounting", num: "ECON 0170", writ: false, department: "Economics", time: 3.5, teaching: "Remote", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNTuWpmg6fE889LliU0CBWA4Mny6U5WtDnzBVCsBG4CLOkGXrPKZ3TPbnXSdY1-EUwtAmAoVBbSFwmr3K9IEFlIKUfs4Ohms&usqp=CAU&ec=45732301"},
  { name: "Integrated Intro to CS", num: "CSCI 0180", writ: false, department: "CS", time: 10.5, teaching: "Remote", img: "https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/53518/preview_53518.jpg"},
  { name: "The Moral Brain", num: "CLPS 1760", writ: false, department: "CLPS", time: 4.21, teaching: "Hybrid", img: "https://www.ebsco.com/sites/g/files/nabnos191/files/acquiadam-assets/why-is-it-so-important-to-study-humanities-blog-image-780.jpg"},
  { name: "Economic Growth", num: "ECON 1560", writ: false, department: "Economics", time: 3.59, teaching: "Hybrid", img: "https://www.teachforamerica.org/sites/default/files/styles/landscape_large/public/2019-05/S19_OD_Careers_Cover.png?h=578fecec&itok=_x-M-xHH"},
  { name: "Behavioral Finance", num: "ECON 1830", writ: false, department: "Economics", time: 6.8, teaching: "Hybrid", img: "https://image.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg"},
  { name: "Optics", num: "ENGN 1560", writ: false, department: "Engineering", time: 5, teaching: "Hybrid", img: "https://static01.nyt.com/images/2010/03/07/magazine/07FOB-onlanguage-t_CA0/07FOB-onlanguage-t_CA0-articleLarge.jpg"},
  { name: "Intro to Software Engineering", num: "CSCI 0320", writ: false, department: "CS", time: 19.21, teaching: "Remote", img: "https://static.vecteezy.com/system/resources/previews/000/180/387/non_2x/software-engineers-vectors.jpg"},
  { name: "Japan's Floating World", num: "EAST 0310", writ: false, department: "East Asian Studies", time: 3, teaching: "Remote", img: "https://i.pinimg.com/originals/74/ee/9a/74ee9a6f3a05c3d04fd60a1d49b95df1.png"},
  { name: "Cognitive Neuropsychology", num: "CLPS 1420", writ: true, department: "CLPS", time: 4.03, teaching: "Remote", img: "https://i.pinimg.com/736x/16/db/82/16db8270078a188ff44d53f8433c06b4.jpg"},
  { name: "The First World War", num: "HIST 0523P", writ: true, department: "History", time: 5.1, teaching: "Remote", img: "https://previews.123rf.com/images/tul/tul1701/tul170100036/68938004-history-minimal-thin-line-icons-set-vector-illustration-design-elements.jpg"},
  { name: "The Place of Persons", num: "PHIL 0010", writ: true, department: "Philosophy", time: 2.99, teaching: "Remote", img: "https://image.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg"},
  { name: "Feminist Philosophy", num: "PHIL 0208", writ: true, department: "Philosophy", time: 4.1, teaching: "Remote", img: "https://i.pinimg.com/originals/5d/fa/11/5dfa11c66fe9732bbf30f42ee8e25e2b.jpg"},
  { name: "Remaking the City", num: "SOC 1330", writ: true, department: "Sociology", time: 3.43, teaching: "Remote", img: "https://i.pinimg.com/originals/f0/54/83/f05483028878fe9037a6d2f0d46444d5.png"},
  { name: "Operating Systems", num: "CSCI 1670", writ: false, department: "CS", time: 13.3, teaching: "Remote", img: "https://image.freepik.com/free-vector/it-specialists-upgrading-operating-system-illustration_1262-18941.jpg"},
  { name: "Distributed Systems", num: "CSCI 1380", writ: false, department: "CS", time: 13.4, teaching: "Remote", img: "https://media.istockphoto.com/vectors/app-development-and-it-technology-vector-id1164509580?k=6&m=1164509580&s=612x612&w=0&h=GQjZkYQHlVsfEXYtMGOGvp2Mi5IhqM6lri8V43_wRWE="},
  { name: "Data Science", num: "CSCI 1951A", writ: true, department: "CS", time: 8.37, teaching: "Remote", img: "https://blog.internshala.com/wp-content/uploads/2018/03/the-roadmap-to-a-career-in-data-science.jpg"},
  { name: "Principles of Economics", num: "ECON 0110", writ: false, department: "Economics", time: 4.3, teaching: "Remote", img: "https://static.coindesk.com/wp-content/uploads/2020/03/shutterstock_1039237918-1.jpg"},
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // keeps track of course cart
      cart: [],
    }
  }
  
  // function that is passed to FilteredList for adding courses
  addToCart = (course) => {
    if (!(this.state.cart.includes(course))){
      const cart = this.state.cart.concat(course);
      this.setState({
        cart
      });
    }
  }

  // function that is passed to CourseCart for removing courses
  removeFromCart = (course) => {
    let cartCopy = [...this.state.cart];
    const idx = cartCopy.indexOf(course);
    cartCopy.splice(idx, 1);
    this.setState({
      cart: cartCopy
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 pr-1 order-2 order-sm-2 order-md-1 order-lg-1">
            <div className="cards-container">
              <FilteredList courses={courseList} addCourse={this.addToCart}/>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 pl-0 order-1 order-sm-1 order-md-2 order-lg-3">
            <div className="cart-container">
              <CourseCart list={this.state.cart} removeCourse={this.removeFromCart}/>
            </div>
          </div>
        </div> 
      </div>
      
    );
  }
}

export default App;
