import { ImageResponse } from "@vercel/og";



export const config = {
    runtime: "edge",
}

const handler = async req => {

    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title') : undefined;
    const description = searchParams.get("description");

    try {
        return new ImageResponse((<div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '-.02em',
                fontWeight: 700,
                background: '#1a2722',
            }}
        >
            <div
                style={{
                    left: 42,
                    top: 42,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <span
                    style={{
                        width: 24,
                        height: 24,
                        background: '#8bc4a4',
                    }}
                />
                <span
                    style={{
                        marginLeft: 8,
                        fontSize: 20,
                        color: '#8bc4a4',
                    }}
                >
                    MyWebclass.org
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '20px 50px',
                    margin: '0 42px',
                    fontSize: 40,
                    width: 'auto',
                    textAlign: 'center',
                    fontSize: "80",
                    color: '#8bc4a4',
                    lineHeight: 1.4,
                }}
            >
                <h2 style={{ lineHeight: 0.5, textAlign: "center", textTransform: "capitalize", }}>{title}</h2>
                <p style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: '20px 50px',
                    margin: '0 42px',
                    fontSize: 40,
                    width: 'auto',
                    maxWidth: 1000,
                    textAlign: 'center',
                    fontSize: "24",
                    color: '#8bc4a4',
                    lineHeight: 1.4,
                }}>{description}</p>
            </div>

        </div>
        ))
    } catch {
        return new Response(`Failed to generate the image`, {
            status: 500
        })
    }
}

export default handler;