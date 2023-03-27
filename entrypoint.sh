#! /bin/bash

echo "importing RDF..."
importrdf preload -f --recursive -q /tmp -c /opt/graphdb/graphdb-repo-config.ttl /opt/graphdb/home/graphdb-import
echo "Running ..."
/opt/graphdb/dist/bin/graphdb