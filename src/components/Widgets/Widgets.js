import React from "react";
import "./Widgets.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export default function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="wiidgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>

        <div className="widgets__articleRight">
         <h4>{heading}</h4>
         <p>{subtitle}</p>
        </div>
    </div>
    );

    return (
        <div className="widgets">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>

            {newsArticle(
                "Elon Musk's Starlink satelitte internet service now available to over 140,000 users in 14 countries around the world and is targetting global coverage including rural areas by 2025",
                "Top news - 4296 readers"
            )}

            {newsArticle(
                "Study suggests fizer vaccine works against virus variant",
                "Top news - 2926 readers"
            )}

            {newsArticle(
                "South Africa power crisis is getting worse with Eskom serving loadshedding two too three times a day",
                "Top news - 4231 readers"
            )}


            {newsArticle(
                "100,000 Americans died of drug overdoses in 12 months durings the pandemic ~275 deaths a day",
                "Top news - 4231 readers"
            )}

            <img
              src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
              alt="ad"
            />
        </div>
    );
}

