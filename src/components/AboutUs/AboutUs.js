import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
        <div>
            <h1 className="header"> Our Overview</h1>
            <p className='paragraph'>Education Coaching Center is an institution where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs under ISO 9001: 2015 certification which remarks us in the IT world. We will continue to share our knowledge for contributing to the success of individuals and to serve society with the best interest. 

            We are committed to providing our students with a platform where superiority is the mantra. We nurture the young talent by sharing knowledge, providing supports in learning techniques, co-operating them for international standard projects, making successful freelancers and driving our youth towards a world of entrepreneurship and thus reducing inequalities. Our culture is important to us and our team of experts drives our culture. The skilled human resource make our deliverables valuable that really helps us to set our standard internationally. 

            In this fast-paced digital world, achieving in career and reaching in targeted goal is depending on the proper execution of planning, implementing and sustaining changes. So getting there with an institution like us will be your wise choice. Your great experience of learning influences our way of training and thus we serve our students and engage with our commitments. Here we invite you to come and join us to have a change in the result of your life and thus we would be grateful to know you and to strengthen a long-lasting relationship. </p>
            <div >
                <div>
                <h1 className='allign'>Mission</h1>
                <hr className='hr'></hr>
                <p className='paragraph'> {'=>'} To empower the community by ensuring state of the art method which strengthens the belief in quality learning.</p>
                <p className='paragraph'> {'=>'} To raise opportunities and growth by broadening the areas and possibilities for our future leaders.</p>
                <p className='paragraph'> {'=>'} To connect best selected human resource for delivering standard values that supports leaders to flourish.</p>
                <p className='paragraph'> {'=>'}To utilize the power of youth by serving and meeting the emerging needs both in local and global network</p>
                <p className='paragraph'> {'=>'} To reduce inequalities for the best interest of the society by creating international array of excellence.</p>
                </div>
                
            </div>
            <hr className='new-hr'></hr>
            <div className='griding'>
                <div>
                    <h2>IT Training for Development</h2>
                    <hr className='development'></hr>
                    <p > {'=>'} Basic Computer Training has been provided to 130 underprivileged youths from low income area Dhaka Uddyan, Mohammadpur partnership with an NGO named Prativa Shamaj Kallyan Samity.</p>
                    <p > {'=>'} Full free scholarship of amount Tk. 20 Lacs has been provided to 100 Women for training them as freelancers from the own fund of Creative IT Ltd.</p>
                    <p> {'=>'} Freelancing Training has been provided to 100 differently abled people with own fund.</p>
                    <p > {'=>'} IT skill development Training has been provided to 30 Media Journalist to enhance their professional skill.</p>
                </div>
                <div>
                    <h2>Annual Evolution</h2>
                    <hr className='annual'></hr>
                    <p > {'=>'} After training Skill Development ration 90%</p>
                    <p > {'=>'} Successful placement ration 70%</p>
                    <p > {'=>'} Average self-employment record 45%</p>
                    <p> {'=>'} Entrepreneurship Development 20%</p>
                    <p > {'=>'} Able to arrange 120 awareness workshop per year with 6000 participants</p>
                </div>
            </div>
        </div>
        
    );
};

export default AboutUs;