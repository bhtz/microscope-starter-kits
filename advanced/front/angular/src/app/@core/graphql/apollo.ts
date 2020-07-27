import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const uri = 'http://localhost:8080/v1/graphql';

export function createApollo(httpLink: HttpLink) {
    return {
        link: httpLink.create({
            uri,
            method: 'POST',
            withCredentials: true
        }),
        cache: new InMemoryCache(),
    };
}
