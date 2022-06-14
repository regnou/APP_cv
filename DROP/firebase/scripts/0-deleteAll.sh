#!/bin/bash

firebase firestore:delete -r -y places
firebase firestore:delete -r  -y artists

firebase firestore:delete -r  -y danza
firebase firestore:delete -r  -y exposiciones
firebase firestore:delete -r  -y festival
firebase firestore:delete -r  -y literatura
firebase firestore:delete -r  -y revistas
firebase firestore:delete -r  -y becas
firebase firestore:delete -r  -y cursos
firebase firestore:delete -r  -y otros