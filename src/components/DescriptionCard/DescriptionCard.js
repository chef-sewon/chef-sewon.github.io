import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard({ noCrown, noButton, longDescription, titleStyle, title, description }) {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      <p className={classnames('description', { 'description-long': longDescription })}>{description}</p>
      {
        !noButton &&
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Portfolio → </Button>
      }
    </div>
  )
}

DescriptionCard.propTypes = {
  noCrown: PropTypes.bool,
  longDescription: PropTypes.bool,
  noButton: PropTypes.bool,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
}

var resume_1 = 'Le Cordon bleu in Sydney Commercial Cookery Certificate 3'
var resume_1_1 = '(2015.10 ~ 2017.01) Merivale full time worker' 
var resume_2 = 'Felix (Sydney, 1hat restaurant French bistro) (2016.05 ~ 2018.01)'
var resume_3 = 'Bert\'s (Sydney, 2hat restaurant Bar and Brasserie)(2018.01 ~ 2018.08)'
var resume_4 = 'Vinga(Wine Bistro)(2018.11 ~ 2019.12)' 

DescriptionCard.defaultProps = {
  title: ' Chef Sewon Kwon',
  description: resume_1 + '\n' + resume_1_1 + '\n\n' + resume_2 + '\n\n'+ resume_3 + '\n\n' + resume_4
}

export default DescriptionCard
