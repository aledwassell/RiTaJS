var runtests = function () {

    RiTa.SILENT = 1;
    lex = RiLexicon();

    test("testAlliterations", function() {

        var result = lex.alliterations("URL");
        // console.log(result);
        ok(result.length < 1);

       ok(!lex.isAlliteration("big ", "bad")); // Word with space False
       ok(!lex.isAlliteration("big    ", "bad")); // Word with tab space

    });
    
    test("testIsRhymeStringString", function() {

        ok(!lex.isRhyme("solo   ", "tomorrow")); // Word with tab space
        ok(!lex.isRhyme("solo", "yoyo"));
        ok(!lex.isRhyme("yoyo", "jojo")); 
    });


    test("testIsVerb", function() {

      ok(lex.isVerb("ducks")); // +n
      ok(lex.isVerb("dogs")); // +n
    });


    test("RiTa.getPosTags()", function () {
     
      deepEqual(RiTa.getPosTags("They feed the cat"), [ "prp", "vbp", "dt", "nn"]); 

    });

    test("RiString.stripPunctuation(unicode)", function () {

        var res = RiTa.stripPunctuation("����������`',;:!?)He,;:!?)([].#l\"\\!@$%&}<>|+$%&}<>|+=-_\\o}<>|+=-_\\/*{^");
        equal(res, "Hello");
    });

    test("RiString.replaceWordAt()", function () {

        var rs = new RiString("Who are you?");
        rs.replaceWordAt(2,"");    // nice! this too...
        //equal(rs.text(), "Who are?"); // strange case, not sure
        equal(rs.text(), "Who are ?");
    });

    test("RiText.replaceWordAt()", function () {

        var rs = new RiText("Who are you?");
        rs.replaceWordAt(2,"");    // nice! this too...
        //equal(rs.text(), "Who are?"); // strange case, not sure
        equal(rs.text(), "Who are ?");
    });

    test("RiGrammar.expandWith()", function () { //TODO: fix impl.

        equal("fix impl.");
    });
    
    test("RiLexicon.rhymes", function () {
        var lex = RiLexicon();
         // Problem: no result
        var result = lex.rhymes("savage");
        var answer = [ "average", "ravage", "cabbage" ];
        deepEqual(result, answer);
    });

    test("RiTa.conjugate", function () {

      equal(RiTa.conjugate("make", {
        tense: RiTa.PAST_TENSE,
        number: RiTa.SINGULAR,
        person: RiTa.FIRST_PERSON
      }), "made");
    });
}

if (typeof exports != 'undefined') runtests(); //exports.unwrap = runtests;
