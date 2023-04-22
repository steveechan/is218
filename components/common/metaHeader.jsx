import Head from "next/head"
import { BASE_URL } from "../../lib/constants"


export const MetaHeader = ({title = "MyWebclass.org", description, ogImage=`${BASE_URL}/images/meta-image.png`, ogUrl=BASE_URL}) => {
    return <Head>
     
     {/* Primary Meta Tags */}
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description}/>

 {/* Open Graph / Facebook */}
<meta property="og:type" content="website"/>
<meta property="og:url" content={ogUrl}/>
<meta property="og:title" content={title}/>
<meta property="og:description" content={description}/>
? <meta property="og:image" content={ogImage}/> 

{/* Twitter */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content={ogUrl} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
    {ogImage ? <meta property="twitter:image" content={ogImage} /> : null}
</Head>
}