backend default {
    .host = "127.0.0.1";
	.port = "8080";
}

sub vcl_backend_response {
    set beresp.ttl = 15s;
    set beresp.grace = 15s;
    unset beresp.http.Cache-Control;
}