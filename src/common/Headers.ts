
/**
 * HTTP headers let the client and the server pass additional information with an HTTP request or response.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
export enum Header {
    /**
     * Defines the authentication method that should be used to access a resource.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate
     */
    "WWW-Authenticate" = "www-authenticate",

    /**
     * Contains the credentials to authenticate a user-agent with a server.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
     */
    "Authorization" = "authorization",

    /**
     * Defines the authentication method that should be used to access a resource behind a proxy server.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate
     */
    "Proxy-Authenticate" = "proxy-authenticate",

    /**
     * Contains the credentials to authenticate a user agent with a proxy server.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization
     */
    "Proxy-Authorization" = "proxy-authorization",

    /**
     * The time, in seconds, that the object has been in a proxy cache.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age
     */
    "Age" = "age",

    /**
     * Directives for caching mechanisms in both requests and responses.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
     */
    "Cache-Control" = "cache-control",

    /**
     * Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data
     */
    "Clear-Site-Data" = "slear-site-data",

    /**
     * The date/time after which the response is considered stale.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires
     */
    "Expires" = "expires",

    /**
     * Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma
     */
    "Pragma" = "pragma",

    /**
     * @deprecated
     * General warning information about possible problems.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning
     */
    "Warning" = "warning",

    /**
     * The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than `ETag`, but easier to calculate in some environments. Conditional requests using `If-Modified-Since` and `If-Unmodified-Since` use this value to change the behavior of the request.
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
     */
    "Last-Modified" = "last-modified",

    /**
    * A unique string identifying the version of the resource. Conditional requests using `If-Match` and `If-None-Match` use this value to change the behavior of the request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
    */
    "ETag" = "etag",

    /**
    * Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match
    */
    "If-Match" = "if-match",

    /**
    * Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given `ETag`s. This is used to update caches (for safe requests), or to prevent uploading a new resource when one already exists.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match
    */
    "If-None-Match" = "if-none-match",

    /**
    * Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
    */
    "If-Modified-Since" = "if-modified-since",

    /**
    * Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since
    */
    "If-Unmodified-Since" = "if-unmodified-since",

    /**
    * Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary
    */
    "Vary" = "vary",

    /**
    * Controls whether the network connection stays open after the current transaction finishes.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection
    */
    "Connection" = "connection",

    /**
    * Controls how long a persistent connection should stay open.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive
    */
    "Keep-Alive" = "keep-alive",

    /**
    * Informs the server about the types of data that can be sent back.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
    */
    "Accept" = "",

    /**
    * The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding
    */
    "Accept-Encoding" = "accept-encoding",

    /**
    * Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
    */
    "Accept-Language" = "accept-language",

    /**
    * Indicates expectations that need to be fulfilled by the server to properly handle the request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect
    */
    "Expect" = "expect",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Max-Forwards
    */
    "Max-Forwards" = "max-forwards",

    /**
    * Contains stored HTTP cookies previously sent by the server with the `Set-Cookie` header.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
    */
    "Cookie" = "cookie",

    /**
    * Send cookies from the server to the user-agent.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
    */
    "Set-Cookie" = "set-cookie",

    /**
    * Indicates whether the response can be shared.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
    */
    "Access-Control-Allow-Origin" = "access-control-allow-origin",

    /**
    * Indicates whether the response to the request can be exposed when the credentials flag is true.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
    */
    "Access-Control-Allow-Credentials" = "access-control-allow-credentials",

    /**
    * Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
    */
    "Access-Control-Allow-Headers" = "access-control-allow-headers",

    /**
    * Specifies the methods allowed when accessing the resource in response to a preflight request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
    */
    "Access-Control-Allow-Methods" = "access-control-allow-methods",

    /**
    * Indicates which headers can be exposed as part of the response by listing their names.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
    */
    "Access-Control-Expose-Headers" = "access-control-expose-headers",

    /**
    * Indicates how long the results of a preflight request can be cached.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
    */
    "Access-Control-Max-Age" = "access-control-max-age",

    /**
    * Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
    */
    "Access-Control-Request-Headers" = "access-control-request-headers",

    /**
    * Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method
    */
    "Access-Control-Request-Method" = "access-control-request-method",

    /**
    * Indicates where a fetch originates from.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
    */
    "Origin" = "origin",

    /**
    * Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin
    */
    "Timing-Allow-Origin" = "timing-allow-origin",

    /**
    * Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a "Save As" dialog.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
    */
    "Content-Disposition" = "content-disposition",

    /**
    * The size of the resource, in decimal number of bytes.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length
    */
    "Content-Length" = "content-length",

    /**
    * Indicates the media type of the resource.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
    */
    "Content-Type" = "content-type",

    /**
    * Used to specify the compression algorithm.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
    */
    "Content-Encoding" = "content-encoding",

    /**
    * Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language
    */
    "Content-Language" = "content-language",

    /**
    * Indicates an alternate location for the returned data.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location
    */
    "Content-Location" = "content-location",

    /**
    * Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded
    */
    "Forwarded" = "forwarded",

    /**
    * Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    */
    "X-Forwarded-For" = "x-forwarded-for",

    /**
    * Identifies the original host requested that a client used to connect to your proxy or load balancer.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
    */
    "X-Forwarded-Host" = "x-forwarded-host",

    /**
    * Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto
    */
    "X-Forwarded-Proto" = "x-forwarded-proto",

    /**
    * Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via
    */
    "Via" = "via",

    /**
    * Indicates the URL to redirect a page to.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location
    */
    "Location" = "location",

    /**
    * Contains an Internet email address for a human user who controls the requesting user agent.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From
    */
    "From" = "from",

    /**
    * Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host
    */
    "Host" = "host",

    /**
    * The address of the previous web page from which a link to the currently requested page was followed.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
    */
    "Referer" = "referer",

    /**
    * Governs which referrer information sent in the `Referer` header should be included with requests made.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    */
    "Referrer-Policy" = "referrer-policy",

    /**
    * Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
    */
    "User-Agent" = "user-agent",

    /**
    * Lists the set of HTTP request methods supported by a resource.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow
    */
    "Allow" = "allow",

    /**
    * Contains information about the software used by the origin server to handle the request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server
    */
    "Server" = "server",

    /**
    * Indicates if the server supports range requests, and if so in which unit the range can be expressed.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges
    */
    "Accept-Ranges" = "accept-ranges",

    /**
    * IIndicates the part of a document that the server should return.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range
    */
    "Range" = "range",

    /**
    * Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range
    */
    "If-Range" = "if-range",

    /**
    * Indicates where in a full body message a partial message belongs.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range
    */
    "Content-Range" = "content-range",

    /**
    * Allows a server to declare an embedder policy for a given document.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
    */
    "Cross-Origin-Embedder-Policy" = "cross-origin-embedder-policy",

    /**
    * Prevents other domains from opening/controlling a window.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
    */
    "Cross-Origin-Opener-Policy" = "cross-origin-opener-policy",

    /**
    * Prevents other domains from reading the response of the resources to which this header is applied.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
    */
    "Cross-Origin-Resource-Policy" = "cross-origin-resource-policy",

    /**
    * Controls resources the user agent is allowed to load for a given page.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
    */
    "Content-Security-Policy" = "content-security-policy",

    /**
    * Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of JSON documents sent via an HTTP `POST` request to the specified URI.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
    */
    "Content-Security-Policy-Report-Only" = "content-security-policy-report-only",

    /**
    * Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT
    */
    "Expect-CT" = "expect-ct",

    /**
    * Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    */
    "Feature-Policy" = "feature-policy",

    /**
    * Provides a mechanism to allow web applications to isolate their origins.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin-Isolation
    */
    "Origin-Isolation" = "origin-isolation",

    /**
    * Force communication using HTTPS instead of HTTP.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    */
    "Strict-Transport-Security" = "strict-transport-security",

    /**
    * Sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the `upgrade-insecure-requests` directive
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests
    */
    "Upgrade-Insecure-Requests" = "upgrade-insecure-requests",

    /**
    * Disables MIME sniffing and forces browser to use the type given in `Content-Type`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    */
    "X-Content-Type-Options" = "x-content-type-options",

    /**
    * The `X-Download-Options` HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Download-Options
    */
    "X-Download-Options" = "x-download-options",

    /**
    * Indicates whether a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    */
    "X-Frame-Options" = "x-frame-options",

    /**
    * Specifies if a cross-domain policy file (`crossdomain.xml`) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the Same-Origin Policy. See the Cross-domain Policy File Specification for more information.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Permitted-Cross-Domain-Policies
    */
    "X-Permitted-Cross-Domain-Policies" = "x-permitted-cross-domain-policies",

    /**
    * May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Powered-By
    */
    "X-Powered-By" = "x-powered-by",

    /**
    * Enables cross-site scripting filtering.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
    */
    "X-XSS-Protection" = "x-xss-protection",

    /**
    * It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values `cross-site`, `same-origin`, `same-site`, and `none`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site
    */
    "Sec-Fetch-Site" = "sec-fetch-site",

    /**
    * It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values cors, navigate, no-cors, same-origin, and websocket.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode
    */
    "Sec-Fetch-Mode" = "sec-fetch-mode",

    /**
    * It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are `?0` for `false` and `?1` for `true`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User
    */
    "Sec-Fetch-User" = "sec-fetch-user",

    /**
    * It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, and `xslt`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
    */
    "Sec-Fetch-Dest" = "sec-fetch-dest",

    /**
    * A request header sent in preemptive request to `fetch()` a resource during service worker boot. The value, which is set with `NavigationPreloadManager.setHeaderValue()`, can be used to inform a server that a different resource should be returned than in a normal `fetch()` operation.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload
    */
    "Service-Worker-Navigation-Preload" = "service-worker-navigation-preload",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Event-ID
    */
    "Last-Event-ID" = "last-event-id",

    /**
    * Defines a mechanism that enables developers to declare a network error reporting policy.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/NEL
    */
    "NEL" = "nel",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-From
    */
    "Ping-From" = "ping-from",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Ping-To
    */
    "Ping-To" = "ping-to",

    /**
    * Used to specify a server endpoint for the browser to send warning and error reports to.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
    */
    "Report-To" = "report-to",

    /**
    * Specifies the form of encoding used to safely transfer the resource to the user.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding
    */
    "Transfer-Encoding" = "transfer-encoding",

    /**
    * Specifies the transfer encodings the user agent is willing to accept.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE
    */
    "TE" = "te",

    /**
    * Allows the sender to include additional fields at the end of chunked message.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer
    */
    "Trailer" = "trailer",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Key
    */
    "Sec-WebSocket-Key" = "sec-websocket-key",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Extensions
    */
    "Sec-WebSocket-Extensions" = "sec-websocket-extensions",

    /**
    * The Sec-WebSocket-Accept header is used in the websocket opening handshake. It would appear in the response headers. That is, this is header is sent from server to client to inform that server is willing to initiate a websocket connection.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept
    */
    "Sec-WebSocket-Accept" = "sec-websocket-accept",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Protocol
    */
    "Sec-WebSocket-Protocol" = "sec-websocket-protocol",

    /**
    * TBD
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Version
    */
    "Sec-WebSocket-Version" = "sec-websocket-version",

    /**
    * A client can express the desired push policy for a request by sending an `Accept-Push-Policy` header field in the request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Push-Policy
    */
    "Accept-Push-Policy" = "accept-push-policy",

    /**
    * A client can send the `Accept-Signature` header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Signature
    */
    "Accept-Signature" = "accept-signature",

    /**
    * Used to list alternate ways to reach this service.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc
    */
    "Alt-Svc" = "alt-svc",

    /**
    * Contains the date and time at which the message was originated.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date
    */
    "Date" = "date",

    /**
    * Indicates that the request has been conveyed in TLS early data.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data
    */
    "Early-Data" = "early-data",

    /**
    * Tells the browser that the page being loaded is going to want to perform a large allocation.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Large-Allocation
    */
    "Large-Allocation" = "large-allocation",

    /**
    * The `Link` entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML `<link>` element.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
    */
    "Link" = "link",

    /**
    * A `Push-Policy` defines the server behavior regarding push when processing a request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Push-Policy
    */
    "Push-Policy" = "push-policy",

    /**
    * Indicates how long the user agent should wait before making a follow-up request.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    */
    "Retry-After" = "retry-after",

    /**
    * The `Signature` header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signature
    */
    "Signature" = "signature",

    /**
    * The `Signed-Headers` header field identifies an ordered list of response header fields to include in a signature.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Signed-Headers
    */
    "Signed-Headers" = "signed-headers",

    /**
    * Communicates one or more metrics and descriptions for the given request-response cycle.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
    */
    "Server-Timing" = "server-timing",

    /**
    * Used to remove the path restriction by including this header in the response of the Service Worker script.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Allowed
    */
    "Service-Worker-Allowed" = "service-worker-allowed",

    /**
    * Links generated code to a source map.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap
    */
    "SourceMap" = "sourcemap",

    /**
    * The relevant RFC document for the `Upgrade` header field is RFC 7230, section 6.7. The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field please see section 6.1 of the aforementioned RFC.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade
    */
    "Upgrade" = "upgrade",

    /**
    * Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    */
    "X-DNS-Prefetch-Control" = "x-dns-prefetch-control",

    /**
    * The `X-Robots-Tag` HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to `<meta name="robots" content="…">`.
    * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Robots-Tag
    */
    "X-Robots-Tag" = "x-robots-tag",
}

export type Headers = Partial<Record<Header, string>> & Partial<{
    "sec-fetch-site": "cross-site" | "same-origin" | "same-site" | "none";
    "sec-fetch-mode": "cors" | "navigate" | "no-cors" | "same-origin" | "websocket";
    "sec-fetch-user": "?0" | "?1";
    "sec-fetch-dest": "audio" | "audioworklet" | "document" | "embed" | "empty" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";

    /**
     * The `X-Frame-Options` HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`. Sites can use this to avoid click-jacking attacks, by ensuring that their content is not embedded into other sites.
     * The added security is provided only if the user accessing the document is using a browser that supports `X-Frame-Options`.
     * @variation `DENY`, `SAMEORIGIN`, `ALLOW-FROM=<url>`
     */
    "x-frame-options": "DENY" | "SAMEORIGIN" | string;
}>;