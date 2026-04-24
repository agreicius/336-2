var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    The power set of a set is the set of all subsets of .   Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function      Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Tuples and Cartesian product  Next we introduce the notion of a tuple , which will both provide a rigorous foundation for the notion of an ordered sequence (or list), and vastly generalize that notion. Interestingly, as revealed in the next definition, a tuple is just a function by another name.   Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .     Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples       Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.    -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .     We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.    Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.   The last definition indicates how our notion of tuple generalizes that of a finite sequence. As the next example illustrates, infinite sequences can also be considered as simply a particular type of tuple: one with indexing set .   Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .     Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .    Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .      Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": " Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.1.13",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_sets_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.1.14",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.15",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.1.20",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.23",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Tuple.",
  "body": " Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .   "
},
{
  "id": "rm_tuple_function",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_function",
  "type": "Remark",
  "number": "0.1.25",
  "title": "Tuple versus function.",
  "body": " Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples     "
},
{
  "id": "ss_tuples_cart_prod-5",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-5",
  "type": "Remark",
  "number": "0.1.27",
  "title": "Tuple equality.",
  "body": " Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.  "
},
{
  "id": "d_ntuple",
  "level": "2",
  "url": "s_sets_functions.html#d_ntuple",
  "type": "Definition",
  "number": "0.1.28",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.29",
  "title": "",
  "body": " We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.  "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.30",
  "title": "",
  "body": " Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  "
},
{
  "id": "d_infinite_sequence",
  "level": "2",
  "url": "s_sets_functions.html#d_infinite_sequence",
  "type": "Definition",
  "number": "0.1.31",
  "title": "Infinite sequence.",
  "body": " Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .   "
},
{
  "id": "ss_tuples_cart_prod-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-11",
  "type": "Remark",
  "number": "0.1.32",
  "title": "Indexed collection of sets.",
  "body": " Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .  "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.33",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.34",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.      "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.   Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "Logical quantifiers.",
  "body": " Logical quantifiers   Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques   Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.    Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)   The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )     Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence  The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)    Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).   It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction  The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.   Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .     Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.      Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities  Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .   Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .   By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .    Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.    Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": " The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )  "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": " It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.  "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": " Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.  "
},
{
  "id": "sss_chain_equalities-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-3",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-2-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-4-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction  When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.  "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case 2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_mod_rings",
  "level": "1",
  "url": "s_mod_rings.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integers modulo <span class=\"process-math\">\\(n\\)<\/span>",
  "body": " Integers modulo     Investigate the arithmetic of .    Investigate the multiplicative units .    Define the multiplicative order of an element and derive some of its basic properties.      Congruence classes  Recall the fundamental notion of congruence: two integers and are congruent modulo the positive integer , denoted , if one of the following equivalent conditions holds:    ;     for some ;     and have the same remainder upon division by .   Much of the content of the last quarter of this course involved statements about the integers that involved a congruence relation. For example, Fermat's little theorem asserts that for all integers that are relatively prime to . In this section we will recast much of the theory congruences in terms of a new finite number system that is related to, but distinct from the integers. The objectives for doing this are twofold.   This will give us an opportunity to review some of the important definitions and results related to congruences.    By shifting our language from congruence relations in to the arithmetic of , we hope to make the theory of congruences more concrete, to connect it more tangibly to the algebra of certain important number systems closely related to .   The semantic shift to also has the advantage of streamlining our statements about congruences, and replacing the somewhat abstract congruence relation with honest to goodness equality . For example, in our new setting, Fermat's little theorem reads as follows: for all , . (We will define shortly.) The small cost for this streamlining is the actual objects of the set are somewhat abstract: instead of integers, they are certain sets of integers that we now define.   Congruence classes    the congruence class of modulo     Let be a positive integer. The congruence class (or residue class ) of an integer modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .     Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .        Congruence classes  The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  When the context is absolutely clear, we will sometimes discard even more notation and refer to the congruence class in simply as .   The congruence modulo relation is what is called an equivalence relation . In other words, it satisfies the following three properties.   Reflexivity   for all .    Reflexivity  If , then .    Transitivity  If and , then .   Furthermore, the congruence classes modulo are called the equivalence classes of this equivalence relation. It is a basic fact about equivalence relations that their corresponding equivalence classes form a partition of the underlying set. (This is one of the topics of elementary set theory, which you can learn about in Math 300-0.) The following theorem makes this official in the case of congruence classes.   Congruence classes   Fix a modulus .   The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of . In more detail, we have , and if , then .    Given any , writing with as in the division algorithm, we have . Furthermore, for any .  As a result, we have and .       The theorem is a consequence of properties of the congruence relation learned earlier, and general properties about equivalence relations.     Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .     Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .    Least residues  Although the least residue description is the most common way of enumerating the elements of , it is not the only one. For example, here are some alternative descriptions of : . Indeed, we obtain these different descriptions simply by choosing a different representative (or name , if you will) of the congruence classes of .    Complete residue system   Let be a positive integer. A complete residue system modulo is a set of integers such that for all and .      Ring structure of  So far we have only given a description of the set . We now define two operations on , modular addition and modular multiplication that turn this finite set into a full blown number system within which we can arithmetic and algebra very much like we do in , with some very important differences.  The good news is that our modular addition and multiplication operations are defined directly in terms of integer addition and multiplication. Recall that if integers satisfy , then we have . As a result, it follows from this that . This in turn guarantees that the following definitions of addition and multiplication of congruence classes are well-defined, in the sense that they do not depend on the choice of representatives: . The set together with these two operations is called the ring of integers modulo . A ring is a technical concept you learn about in the Math 330\/331 sequences. For us, it will simply mean a number system with two operations that behave very much like how addition and multiplication behave in .   Ring of integers modulo   Let be a positive integer. The set together with the modular addition operation and modular multiplication operations is called the ring of integers modulo .  When the context is clear, we will write and . Additionally, for any , we will write .    Simplifying arithmetic expressions in proceeds in much the same manner as simplifying a congruence statement in , but in a more streamlined way. The fact that our operations do not depend on our choice of representatives and can be exploited by choosing the representatives that make our life as easy as possible! The next examples illustrate this.   Modular arithmetic   Fix the modulus . Find a representative for the congruence class .    We have .     Least residue   Let and let . Compute .    To find , we find an such that . We have . Thus .      Units modulo  As mentioned above, though for the most part arithmetic and algebra in the modular ring proceeds in much the same manner as in , there are some important differences. Here is one: recall that in , if for integers and , then either or . This is not true in . For example: we have , and yet and . As a consequence we cannot in general cancel nonzero factors in equations in . In other words we do not have an algebra rule equivalent to the following integer property: . One of the motivations for singling out the modular units in , as defined below, is that these can be cancelled in equations.   Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .     Modulus   Compute (a) and addition table for , and (b) a multiplication table for .  From your multiplication table, determine .    You should do this by hand on your own. We are too lazy to write up the tables here, but will show you how to do this in Sage. See for more details about using Sage.   Looking at the multiplication table for , we see that with the exception of , all elements have an element satisfying . Thus .     Units modulo      Find all units of by trial and error, using . That is for each either provide an inverse of , or show that no inverse exists.    Make a multiplication table for .       Again, this is something we trust you to do on your own. In the meantime, here is what Sage tells us.   We see from this that . Some other interesting properties gleaned from the multiplication table above is that for all : in other words, each element is its own multiplicative inverse!     Units modulo   Let be a positive integer.   An element is a unit if and only if . In other words: . As a result, , where is the Euler totient function.    Assume is relatively prime to . Given integers and satisfying , as guaranteed by the Euclidean algorithm, we have .    If , then . In other words, is closed under multiplication .    If , then for all . In other words, invertible elements of can be cancelled multiplicatively.          Assume , and let . By definition, there is an element such that . By , this implies , or equivalently, for some . But then we have . Since divides and , we have , and thus . Thus if is a unit, then .  For the other direction assume . From the Euclidean algorithm, we know there are integers and such that . But then , or equivalently, . We conclude that .  We conclude that , as desired. Furthermore, taking our representatives to be least positive residues, we see that , from which it follows immediately from the definition of the Euler totient function and that .    As we saw in the previous argument, if , then , and thus .    This follows from (1) and the fact that if and are both relatively prime to , then so is .    The implication is clear. For the other direction, we have .        Units modulo   Let be a prime integer. All nonzero elements of are invertible: , .    As makes clear, modular rings with prime modulus are special for the following reason: every nonzero element of is invertible: this is because for all . In this respect the rings bear a striking resemblance to number systems like and (and ). In general a number system (or ring) for which all nonzero elements have a multiplicative inverse is called a field . Thus the family of rings , where is a prime integer, gives us a family of finite fields. To highlight this special property, we will denote .   Finite fields   Let be a prime integer. Since is a field (all nonzero elements are invertible), we will write for .     Sage examples  Here are some Sage cells to play with.     Integers modulo   There two different ways for doing modular arithmetic in SageMath that mirror our two ways of dealing with congruences. If you want to stay in the realm of the integers, the command a%n returns the least residue of modulo .   Alternatively, if you want to work within one of our modular rings, you can use the command R=Integers(n) to create the ring with name .   To take an integer and get its corresponding congruence class , use the coercing method R(a) . (Note: the cell below assumes you have evaluated the cell above that defines R=Integers(8) .)   Sage is built on Python, and as such any object you create ( , R or a ) has built-in methods that can be applied to it. You can get a list of these methods by using dir() command. To get to the good stuff, scroll down beyond all the names with underscores. For example, you will notice by running dir(R) that our modular ring has methods cardinality , is_field , and . Let's see what these do.    Similarly, dir(a) reveals that our ring element a has methods is_unit and inverse .    Let's try this same routine with a different ring.      "
},
{
  "id": "s_mod_rings-2",
  "level": "2",
  "url": "s_mod_rings.html#s_mod_rings-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Investigate the arithmetic of .    Investigate the multiplicative units .    Define the multiplicative order of an element and derive some of its basic properties.    "
},
{
  "id": "d_cong_classes",
  "level": "2",
  "url": "s_mod_rings.html#d_cong_classes",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Congruence classes.",
  "body": " Congruence classes    the congruence class of modulo     Let be a positive integer. The congruence class (or residue class ) of an integer modulo , denoted (or ) is the set of all integers congruent to modulo : , . Elements of a congruence class are called representatives (or residues ) of that class.  The set of all congruence classes modulo is denoted : , . The integer in all the settings above is called a modulus .   "
},
{
  "id": "eg_cong_mod_3",
  "level": "2",
  "url": "s_mod_rings.html#eg_cong_mod_3",
  "type": "Example",
  "number": "1.1.2",
  "title": "Congruence modulo <span class=\"process-math\">\\(3\\)<\/span>.",
  "body": " Congruence modulo   Consider the modulus .   Compute and .   Find a finite list of integers such that .   Compute .          We have .    It is not difficult to show that for any we have for some . (See theory below more generally.) Thus .    The sets are clearly all distinct from one another. Thus .      "
},
{
  "id": "ss_cong-5",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-5",
  "type": "Remark",
  "number": "1.1.3",
  "title": "Congruence classes.",
  "body": " Congruence classes  The notation is ambiguous since it does not indicate the modulus in question. This is one reason for the alternative notation . Furthermore, the notation somehow does a better job of reminding us that a congruence class is not itself an integer, but rather a set of integers .  We will use both notations interchangeably. Typically, we will favor when performing modular arithmetic (see below), and when asserting something about sets.  When the context is absolutely clear, we will sometimes discard even more notation and refer to the congruence class in simply as .  "
},
{
  "id": "th_cong_class",
  "level": "2",
  "url": "s_mod_rings.html#th_cong_class",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Congruence classes.",
  "body": " Congruence classes   Fix a modulus .   The following statements are equivalent.    .     .     .       The congruence classes modulo form a partition of . In more detail, we have , and if , then .    Given any , writing with as in the division algorithm, we have . Furthermore, for any .  As a result, we have and .       The theorem is a consequence of properties of the congruence relation learned earlier, and general properties about equivalence relations.   "
},
{
  "id": "d_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#d_least_residue",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Least residue modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Least residue modulo   Fix a positive modulus . Given an integer the least residue of modulo , denoted is the unique satisfying .   "
},
{
  "id": "ss_cong-9",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-9",
  "type": "Warning",
  "number": "1.1.6",
  "title": "Congruence relation and least residues.",
  "body": " Congruence relation and least residues  Do not confuse the two quite similar looking notations and . The first asserts that a certain relation holds, namely that is congruent to modulo . The second denotes the unique integer in that is congruent to modulo .  Said differently, the notion of the least residue defines a function .  "
},
{
  "id": "ss_cong-10",
  "level": "2",
  "url": "s_mod_rings.html#ss_cong-10",
  "type": "Remark",
  "number": "1.1.7",
  "title": "Least residues.",
  "body": " Least residues  Although the least residue description is the most common way of enumerating the elements of , it is not the only one. For example, here are some alternative descriptions of : . Indeed, we obtain these different descriptions simply by choosing a different representative (or name , if you will) of the congruence classes of .  "
},
{
  "id": "d_complete_residue_system",
  "level": "2",
  "url": "s_mod_rings.html#d_complete_residue_system",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Complete residue system.",
  "body": " Complete residue system   Let be a positive integer. A complete residue system modulo is a set of integers such that for all and .   "
},
{
  "id": "d_int_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_int_mod_n",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Ring of integers modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Ring of integers modulo   Let be a positive integer. The set together with the modular addition operation and modular multiplication operations is called the ring of integers modulo .  When the context is clear, we will write and . Additionally, for any , we will write .   "
},
{
  "id": "eg_mod_arith",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_arith",
  "type": "Example",
  "number": "1.1.10",
  "title": "Modular arithmetic.",
  "body": " Modular arithmetic   Fix the modulus . Find a representative for the congruence class .    We have .   "
},
{
  "id": "eg_least_residue",
  "level": "2",
  "url": "s_mod_rings.html#eg_least_residue",
  "type": "Example",
  "number": "1.1.11",
  "title": "Least residue.",
  "body": " Least residue   Let and let . Compute .    To find , we find an such that . We have . Thus .   "
},
{
  "id": "d_units_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#d_units_mod_n",
  "type": "Definition",
  "number": "1.1.12",
  "title": "Multiplicative units in <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>.",
  "body": " Multiplicative units in   Fix a modulus . An element is a unit (or (multiplicatively) invertible ) if there is an element satisfying . The element in this case is called the multiplicative inverse of , denoted . The set of all units of is denoted : , .   "
},
{
  "id": "eg_mod_groups",
  "level": "2",
  "url": "s_mod_rings.html#eg_mod_groups",
  "type": "Example",
  "number": "1.1.13",
  "title": "Modulus <span class=\"process-math\">\\(n=5\\)<\/span>.",
  "body": " Modulus   Compute (a) and addition table for , and (b) a multiplication table for .  From your multiplication table, determine .    You should do this by hand on your own. We are too lazy to write up the tables here, but will show you how to do this in Sage. See for more details about using Sage.   Looking at the multiplication table for , we see that with the exception of , all elements have an element satisfying . Thus .   "
},
{
  "id": "eg_units_mod_12",
  "level": "2",
  "url": "s_mod_rings.html#eg_units_mod_12",
  "type": "Example",
  "number": "1.1.14",
  "title": "Units modulo <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": " Units modulo      Find all units of by trial and error, using . That is for each either provide an inverse of , or show that no inverse exists.    Make a multiplication table for .       Again, this is something we trust you to do on your own. In the meantime, here is what Sage tells us.   We see from this that . Some other interesting properties gleaned from the multiplication table above is that for all : in other words, each element is its own multiplicative inverse!   "
},
{
  "id": "th_units_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#th_units_mod_n",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "Units modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Units modulo   Let be a positive integer.   An element is a unit if and only if . In other words: . As a result, , where is the Euler totient function.    Assume is relatively prime to . Given integers and satisfying , as guaranteed by the Euclidean algorithm, we have .    If , then . In other words, is closed under multiplication .    If , then for all . In other words, invertible elements of can be cancelled multiplicatively.          Assume , and let . By definition, there is an element such that . By , this implies , or equivalently, for some . But then we have . Since divides and , we have , and thus . Thus if is a unit, then .  For the other direction assume . From the Euclidean algorithm, we know there are integers and such that . But then , or equivalently, . We conclude that .  We conclude that , as desired. Furthermore, taking our representatives to be least positive residues, we see that , from which it follows immediately from the definition of the Euler totient function and that .    As we saw in the previous argument, if , then , and thus .    This follows from (1) and the fact that if and are both relatively prime to , then so is .    The implication is clear. For the other direction, we have .      "
},
{
  "id": "cor_units_mod_p",
  "level": "2",
  "url": "s_mod_rings.html#cor_units_mod_p",
  "type": "Corollary",
  "number": "1.1.16",
  "title": "Units modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Units modulo   Let be a prime integer. All nonzero elements of are invertible: , .   "
},
{
  "id": "ss_mult_units_mod_n-9",
  "level": "2",
  "url": "s_mod_rings.html#ss_mult_units_mod_n-9",
  "type": "Notation",
  "number": "1.1.17",
  "title": "Finite fields <span class=\"process-math\">\\(\\F_p\\)<\/span>.",
  "body": " Finite fields   Let be a prime integer. Since is a field (all nonzero elements are invertible), we will write for .  "
},
{
  "id": "eg_sage_integers_mod_n",
  "level": "2",
  "url": "s_mod_rings.html#eg_sage_integers_mod_n",
  "type": "Sage example",
  "number": "1",
  "title": "Integers modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Integers modulo   There two different ways for doing modular arithmetic in SageMath that mirror our two ways of dealing with congruences. If you want to stay in the realm of the integers, the command a%n returns the least residue of modulo .   Alternatively, if you want to work within one of our modular rings, you can use the command R=Integers(n) to create the ring with name .   To take an integer and get its corresponding congruence class , use the coercing method R(a) . (Note: the cell below assumes you have evaluated the cell above that defines R=Integers(8) .)   Sage is built on Python, and as such any object you create ( , R or a ) has built-in methods that can be applied to it. You can get a list of these methods by using dir() command. To get to the good stuff, scroll down beyond all the names with underscores. For example, you will notice by running dir(R) that our modular ring has methods cardinality , is_field , and . Let's see what these do.    Similarly, dir(a) reveals that our ring element a has methods is_unit and inverse .    Let's try this same routine with a different ring.    "
},
{
  "id": "s_order_mod_n",
  "level": "1",
  "url": "s_order_mod_n.html",
  "type": "Section",
  "number": "1.2",
  "title": "Order of modular units",
  "body": " Order of modular units     Define the order of elements of .    Define the notion of a primitive root modulo .    Begin exploring the existence of primitive roots.      Order and primitive roots  Recall Euler's theorem: if is a positive integer and is relatively prime to , then . Equivalently, in the language of modular rings, given , we have . As an illustration of the economy of the modular ring language, let's re-prove this result.   Modular ring proof of Euler's theorem  Let be a positive element, and let be the distinct elements of , so that . (Note: although we have for some integer , we will not need to make use of these integers in our argument; we will only use properties of discussed in the previous section.)  Now, given any element , we claim that we have the set equality . Indeed, from , we know that , since is closed under multiplication. Thus . For the other inclusion, we use the fact that there is an element satisfying . Given any element , letting , we have . Having shown , we see that . Letting , the above equality becomes . Since , it can be cancelled multiplicatively by multiplying both sides by . We conclude that , as desired.   From Euler's theorem we know that for all there is at least one positive integer such that : namely, . It follows from the well-ordering property of the integers that there is thus a smallest positive integer satisfying . We call this the order of .   Order of a modular unit    order of element    Let be a positive integer. Given an element , its order is the smallest positive integer such that .  Similarly, given an integer that is relatively prime to , the order of modulo , denoted , is the smallest positive integer such that .     Modular exponentiation  In what follows we will take for granted some elementary algebraic properties about exponentiation in that follow immediately from the corresponding properties in . For example, we have for all and nonnegative integers . Furthermore, if , then definining negative powers as , the above equalities hold for all integers .    Order of modular units   Let be a positive integer, let , and let .   For all integers , if and only if .  In particular .     if and only if .    We have , and this set has cardinality ( , it contains exactly distinct elements).     for all integers .          First assume that , so that for some . We then have , as desired. Conversely, assume and write where , as in the division algorithm. Since , and since is the smallest positive integer satisfying , we must have , and thus .    We have .    Since if and only if , and since form a complete set of residues modulo , we have , and these powers of are all distinct. Thus the set has cardinality .    Let . We will show that is the smallest positive integer such that , and thus that .  First observe that , since . Now assume that is a positive integer satisfying . It follows that . But then . Since and are relatively prime, it follows that , and hence that , since and are positive. This proves is the smallest positive integer such that , and thus that .        Primitive root   Let be a positive integer, and let . The cyclic group generated by , denoted , is the set of all integer powers of : , , where .  A primitive root (or cyclic generator ) of is an element satisfying .  We say an integer is a primitive root modulo if is a primitive root of .     Primitive roots   Compute the order of all elements of for the given modulus , and decide whether has a primitive root.  Additionally, if a primitive root does exist, verify the order formula for each power given in .                     For each modulus below, we will drop most of our notational baggage and simply write instead of .   We have . Computing successive powers of these elements leads to the following order computations: . Since , we see that both of these elements are primitive roots in . Let's verify that : . Lastly, let's verify the order formula for the powers of .   Orders of powers of                                                 We have and we easily compute . Since no element has order 4, there is no primitive root for .    Since if and only if , the units of are the elements of the form , where . There are of these. Let's use Sage to see whether any of these have order 20.   We see that has order , and thus that is a primitive root. We leave it to the reader to verify the order formula for powers of as we did in the first part.  On a separate note, notice that there are 8 distinct primitive roots here: . In the next sections we will derive a formula for the number of distinct primitive roots modulo, if one does indeed exist.       Our example makes one thing clear: some moduli admit primitive roots; others do not. In the next section we will see that when is prime, then a primitive root is guaranteed to exist.    Sage examples  Here are some Sage cells to play with.     Order and primitive elements  For an element a of Integers(n) , the method a.is_primitive_root() determines whether a is a primitive root.   For an invertible element a of Integers(n) , the method a.multiplicative_order() computes the order of a . If a is not invertible, then a.multiplicative_order() raises an error. We can test for invertibility using the a.is_unit() method.   Lastly, a modular ring object R=Integers(n) has a method R.unit_group() that returns , which itself has lots of useful methods that you can explore using dir(G) . The method G.is_cyclic() determines whether has a primitive element. (Terminology-wise, is a mathematical object called a group ; and a group is cyclic precisely when it can be expressed as for some element , just as in .)  Let's investigate which moduli admit a primitive root.     "
},
{
  "id": "s_order_mod_n-2",
  "level": "2",
  "url": "s_order_mod_n.html#s_order_mod_n-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Define the order of elements of .    Define the notion of a primitive root modulo .    Begin exploring the existence of primitive roots.    "
},
{
  "id": "ss_order_prim_roots-3",
  "level": "2",
  "url": "s_order_mod_n.html#ss_order_prim_roots-3",
  "type": "Proof",
  "number": "1.2.1.1",
  "title": "Modular ring proof of Euler’s theorem.",
  "body": " Modular ring proof of Euler's theorem  Let be a positive element, and let be the distinct elements of , so that . (Note: although we have for some integer , we will not need to make use of these integers in our argument; we will only use properties of discussed in the previous section.)  Now, given any element , we claim that we have the set equality . Indeed, from , we know that , since is closed under multiplication. Thus . For the other inclusion, we use the fact that there is an element satisfying . Given any element , letting , we have . Having shown , we see that . Letting , the above equality becomes . Since , it can be cancelled multiplicatively by multiplying both sides by . We conclude that , as desired.  "
},
{
  "id": "d_order_modular_unit",
  "level": "2",
  "url": "s_order_mod_n.html#d_order_modular_unit",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Order of a modular unit.",
  "body": " Order of a modular unit    order of element    Let be a positive integer. Given an element , its order is the smallest positive integer such that .  Similarly, given an integer that is relatively prime to , the order of modulo , denoted , is the smallest positive integer such that .   "
},
{
  "id": "ss_order_prim_roots-6",
  "level": "2",
  "url": "s_order_mod_n.html#ss_order_prim_roots-6",
  "type": "Remark",
  "number": "1.2.2",
  "title": "Modular exponentiation.",
  "body": " Modular exponentiation  In what follows we will take for granted some elementary algebraic properties about exponentiation in that follow immediately from the corresponding properties in . For example, we have for all and nonnegative integers . Furthermore, if , then definining negative powers as , the above equalities hold for all integers .  "
},
{
  "id": "prop_order_mod_n",
  "level": "2",
  "url": "s_order_mod_n.html#prop_order_mod_n",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "Order of modular units.",
  "body": " Order of modular units   Let be a positive integer, let , and let .   For all integers , if and only if .  In particular .     if and only if .    We have , and this set has cardinality ( , it contains exactly distinct elements).     for all integers .          First assume that , so that for some . We then have , as desired. Conversely, assume and write where , as in the division algorithm. Since , and since is the smallest positive integer satisfying , we must have , and thus .    We have .    Since if and only if , and since form a complete set of residues modulo , we have , and these powers of are all distinct. Thus the set has cardinality .    Let . We will show that is the smallest positive integer such that , and thus that .  First observe that , since . Now assume that is a positive integer satisfying . It follows that . But then . Since and are relatively prime, it follows that , and hence that , since and are positive. This proves is the smallest positive integer such that , and thus that .      "
},
{
  "id": "d_cyclic_group",
  "level": "2",
  "url": "s_order_mod_n.html#d_cyclic_group",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Primitive root.",
  "body": " Primitive root   Let be a positive integer, and let . The cyclic group generated by , denoted , is the set of all integer powers of : , , where .  A primitive root (or cyclic generator ) of is an element satisfying .  We say an integer is a primitive root modulo if is a primitive root of .   "
},
{
  "id": "eg_primitive_roots",
  "level": "2",
  "url": "s_order_mod_n.html#eg_primitive_roots",
  "type": "Example",
  "number": "1.2.5",
  "title": "Primitive roots.",
  "body": " Primitive roots   Compute the order of all elements of for the given modulus , and decide whether has a primitive root.  Additionally, if a primitive root does exist, verify the order formula for each power given in .                     For each modulus below, we will drop most of our notational baggage and simply write instead of .   We have . Computing successive powers of these elements leads to the following order computations: . Since , we see that both of these elements are primitive roots in . Let's verify that : . Lastly, let's verify the order formula for the powers of .   Orders of powers of                                                 We have and we easily compute . Since no element has order 4, there is no primitive root for .    Since if and only if , the units of are the elements of the form , where . There are of these. Let's use Sage to see whether any of these have order 20.   We see that has order , and thus that is a primitive root. We leave it to the reader to verify the order formula for powers of as we did in the first part.  On a separate note, notice that there are 8 distinct primitive roots here: . In the next sections we will derive a formula for the number of distinct primitive roots modulo, if one does indeed exist.      "
},
{
  "id": "sage_order_primitive",
  "level": "2",
  "url": "s_order_mod_n.html#sage_order_primitive",
  "type": "Sage example",
  "number": "2",
  "title": "Order and primitive elements.",
  "body": " Order and primitive elements  For an element a of Integers(n) , the method a.is_primitive_root() determines whether a is a primitive root.   For an invertible element a of Integers(n) , the method a.multiplicative_order() computes the order of a . If a is not invertible, then a.multiplicative_order() raises an error. We can test for invertibility using the a.is_unit() method.   Lastly, a modular ring object R=Integers(n) has a method R.unit_group() that returns , which itself has lots of useful methods that you can explore using dir(G) . The method G.is_cyclic() determines whether has a primitive element. (Terminology-wise, is a mathematical object called a group ; and a group is cyclic precisely when it can be expressed as for some element , just as in .)  Let's investigate which moduli admit a primitive root.   "
},
{
  "id": "s_primitive_roots",
  "level": "1",
  "url": "s_primitive_roots.html",
  "type": "Section",
  "number": "1.3",
  "title": "Primitive roots",
  "body": " Primitive roots     Develop some theory about polynomials with coefficients in one of our familiar rings ( , , , , ).    Prove that has a primitive root for prime.    Derive counting formulas for elements of given order in , assuming that a primitive root exists.      Introduction  In this section we will show that has a primitive root for prime. Before getting to that existential statement, we first prove a conditional result that counts the number of primitive roots modulo , assuming one exists. Note that provides an unconditional version of this result in the special case where is a prime integer.   Number of primitive roots   Let be a positive integer.   If has a primitive root, then it has exactly distinct primitive roots.    More generally, if has a primitive root, then for each positive divisor of , the number of elements of of order is .       Assume is a primitive root of , so that .   If is a primitive root of , then for some . And furthermore, since , we must have , by . This happens if and only if . Thus , the number of primitive roots of is equal in this case to the number of satisfying . This is , by definition.    This result is very easy to prove if you know a little group theory, and a little tricky to prove (for general ) using just elementary number theory. We will defer the proof to a guided homework exercise.        Primitive roots modulo 25   We saw in that has a primitive root, and that in fact are all of the primitive roots of . Observe that there are exactly of these; and sure enough, we have .    We now make a small digression to develop some notions about polynomials with coefficients in a given number system. We could develop this theory for polynomials with coefficients in an arbitrary ring , but since we have not given an official definition of a ring, we will restrict ourselves to the case where our coefficients lie in , , , or for some positive integer .    Polynomials with coefficients in rings   Polynomials over a ring    set of polynomials with coeffiecients in    Let be either , , , or for some positive integer . A polynomial over in the indeterminate (or variable) is a formal expression of the form , where is a nonnegative integer and for all . We call the coefficients of , and we denote by the set of all polynomials with coefficients in : , . The polynomial is nonzero if for some , and zero otherwise. The degree of a nonzero polynomial , denoted , is the largest positive integer such that the -th coefficient of is nonzero.  Two nonzero polynomial and with and are equal, written if and for all .  Given a polynomial and an element , the evaluation of at is the element defined as . In this manner, the polynomial defines a function . An element is a root of if .  Lastly, addition and multiplication of polynomials are defined as usual. In particular, given and , we have , where for all .    Although we stated our definitions for polynomials over general rings, for the next theorem we need to restrict ourselves to the case where the coefficients lie in a field. Again, since we have not given a definition of a field, we will state the results for polynomials with coeffiecients in , , or for some prime integer .   Polynomial properties   Let be either , , or for some prime integer , and let and be nonzero polynomials over .   Degree of products   .    Division with remainder  There are unique polynomials and such that and either or .    Roots and factorization  An element is a root of if and only if we have for some polynomial .    Roots and degree  Let . There are at most distinct roots of in .       In the arguments below, besides the ring structure of , we will use two crucial additional properties that are related to one another:   If is nonzero, then there is an element such that .    If and are nonzero elements of , then is nonzero.   The second property is actually a consequence of the first: assume is nonzero; by the first property, there is an element satisfying ; if for some element , then multiplying both sides by , we conclude that ; thus if and are nonzero, then is nonzero.  Now for the proofs of the four statements.   Let and , where and , so that and . We then have . Since and are nonzero, then (See above.) It follows that .    We omit a formal proof of this result, which is basically a consequence of the fact that for any of the given number systems we can perform polynomial long division in the same manner as we do over .    For any , using division with remainder, we can write uniquely as where either or . In other words, we have for some constant . Since , we see that is a root of if and only if , if and only if .    We proceed by induction on .  Base step: . Since in this case, we have for some constant . Since is assumed to be nonzero, we have . But then for all , showing that has zero roots.    Let , and assume the result holds for all nonzero polynomials of degree . Let be a polynomial of degree . If has no roots, then we are done. Otherwise, let be a root of , and write . Since , we see that (and in particular, is nonzero). Suppose is another root of . Since and , we must have . (Again, see the first paragraph of this proof.) Thus any other root of besides is a root of . Since has degree , it has at most distinct roots by induction. We conclude that has at most distinct roots, as desired.         Primitive roots modulo a prime  With this bit of polynomial theory under our belt, we move on to a proof that has a primitive root for prime. We begin with two lemmas. The first is a classic identity involving the Euler totient function that is usually covered in the first quarter of the class.   Totient function identity   Let be a positive integer, and let be the Euler totient function. .     Elements of order bound   Let be a prime integer, and let be a positive integer. The number of elements of of order is either or .    If there are no elements of of order , then we are done. Otherwise, let have order . It follows that each of the elements satisfies , or equivalently . Since the polynomial has coefficients in the field , and has degree equal to , has at most roots. We conclude that the roots of are precisely the elements of . In particular, any other element of order must be of the form for some . Since , we see that has order if and only if . We conclude that there are precisely elements of of order .     Primitive roots modulo   Let be a prime integer. For each positive integer , let be the set of elements of of order .   If , then .    If , then .    In particular, , and thus there is a primitive root of : , there is an element satisfying .          We know from that for all . Thus, if , then there is no element of order . Equivalently, for all .    For each positive divisor of we know from that . In particular, we have for all . Furthermore, since the sets are disjoint (an element of has a unique order), and since (every element of has order for some divisor of ), we have . From we also know that . Subtracting these two equalities, we conclude that . Since for all positive , we conclude that for all positive . But a sum of nonnegative numbers is zero if and only if each number is zero. Thus we conclude that for all positive .    From (2), we conclude that . Since is positive, we conclude that there is an element of order . (In fact there are precisely such elements.) Such an element satisfies and hence is a primitive root.        Primitive roots modulo   Let be the set of elements of of order .   Find a primitive root of .    List all possible orders of elements of .    For each possible order , enumerate the elements of described as powers of .             Sage examples   Primitive roots  The Sage function primitive_root(n) returns a primitive root of if one exists, and raises an error otherwise. Furthermore, if is prime, then primitive_root(p) returns the smallest positive integer such that is a primitive root of .       Structure of unit group modulo  Once we have created a modular ring R=Integers(n) , we can explore the structure of the unit group using G=R.unit_groups() .   Notice that the description of is not precisely what we expected. Sage is describing abstractly as a cyclic group of cardinality . It has obscured the origins of this group as a subset of . Let's see what the elements of look like in Sage.   It appears Sage has realized as the cyclic group generated by an element it calls . Sage has not actually forgotten the humble beginnings of , as the method f.value() reveals.   Aha! We now see that corresponds to the element in . The Sage group object has additional useful methods. For example, produces a list of all subgroups of , which in our language is the list of the distinct cyclic subgroups as we let vary over .   Note that once again, Sage describes these subgroups in terms of the element . To reminder ourselves of what is here, we can use the .gen() method, followed by the .value() method. For the list comprehension below, we need to exclude the trivial subgroup at the end. Do you see how we did this?     "
},
{
  "id": "s_primitive_roots-2",
  "level": "2",
  "url": "s_primitive_roots.html#s_primitive_roots-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   Develop some theory about polynomials with coefficients in one of our familiar rings ( , , , , ).    Prove that has a primitive root for prime.    Derive counting formulas for elements of given order in , assuming that a primitive root exists.    "
},
{
  "id": "th_number_of_primitive_roots",
  "level": "2",
  "url": "s_primitive_roots.html#th_number_of_primitive_roots",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "Number of primitive roots.",
  "body": " Number of primitive roots   Let be a positive integer.   If has a primitive root, then it has exactly distinct primitive roots.    More generally, if has a primitive root, then for each positive divisor of , the number of elements of of order is .       Assume is a primitive root of , so that .   If is a primitive root of , then for some . And furthermore, since , we must have , by . This happens if and only if . Thus , the number of primitive roots of is equal in this case to the number of satisfying . This is , by definition.    This result is very easy to prove if you know a little group theory, and a little tricky to prove (for general ) using just elementary number theory. We will defer the proof to a guided homework exercise.      "
},
{
  "id": "eg_primitive_roots_25",
  "level": "2",
  "url": "s_primitive_roots.html#eg_primitive_roots_25",
  "type": "Example",
  "number": "1.3.2",
  "title": "Primitive roots modulo 25.",
  "body": " Primitive roots modulo 25   We saw in that has a primitive root, and that in fact are all of the primitive roots of . Observe that there are exactly of these; and sure enough, we have .   "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_primitive_roots.html#d_polynomials",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Polynomials over a ring.",
  "body": " Polynomials over a ring    set of polynomials with coeffiecients in    Let be either , , , or for some positive integer . A polynomial over in the indeterminate (or variable) is a formal expression of the form , where is a nonnegative integer and for all . We call the coefficients of , and we denote by the set of all polynomials with coefficients in : , . The polynomial is nonzero if for some , and zero otherwise. The degree of a nonzero polynomial , denoted , is the largest positive integer such that the -th coefficient of is nonzero.  Two nonzero polynomial and with and are equal, written if and for all .  Given a polynomial and an element , the evaluation of at is the element defined as . In this manner, the polynomial defines a function . An element is a root of if .  Lastly, addition and multiplication of polynomials are defined as usual. In particular, given and , we have , where for all .   "
},
{
  "id": "th_polynomials_props",
  "level": "2",
  "url": "s_primitive_roots.html#th_polynomials_props",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Polynomial properties.",
  "body": " Polynomial properties   Let be either , , or for some prime integer , and let and be nonzero polynomials over .   Degree of products   .    Division with remainder  There are unique polynomials and such that and either or .    Roots and factorization  An element is a root of if and only if we have for some polynomial .    Roots and degree  Let . There are at most distinct roots of in .       In the arguments below, besides the ring structure of , we will use two crucial additional properties that are related to one another:   If is nonzero, then there is an element such that .    If and are nonzero elements of , then is nonzero.   The second property is actually a consequence of the first: assume is nonzero; by the first property, there is an element satisfying ; if for some element , then multiplying both sides by , we conclude that ; thus if and are nonzero, then is nonzero.  Now for the proofs of the four statements.   Let and , where and , so that and . We then have . Since and are nonzero, then (See above.) It follows that .    We omit a formal proof of this result, which is basically a consequence of the fact that for any of the given number systems we can perform polynomial long division in the same manner as we do over .    For any , using division with remainder, we can write uniquely as where either or . In other words, we have for some constant . Since , we see that is a root of if and only if , if and only if .    We proceed by induction on .  Base step: . Since in this case, we have for some constant . Since is assumed to be nonzero, we have . But then for all , showing that has zero roots.    Let , and assume the result holds for all nonzero polynomials of degree . Let be a polynomial of degree . If has no roots, then we are done. Otherwise, let be a root of , and write . Since , we see that (and in particular, is nonzero). Suppose is another root of . Since and , we must have . (Again, see the first paragraph of this proof.) Thus any other root of besides is a root of . Since has degree , it has at most distinct roots by induction. We conclude that has at most distinct roots, as desired.      "
},
{
  "id": "lem_totient_identity",
  "level": "2",
  "url": "s_primitive_roots.html#lem_totient_identity",
  "type": "Lemma",
  "number": "1.3.5",
  "title": "Totient function identity.",
  "body": " Totient function identity   Let be a positive integer, and let be the Euler totient function. .   "
},
{
  "id": "lemma_order_k_bound",
  "level": "2",
  "url": "s_primitive_roots.html#lemma_order_k_bound",
  "type": "Lemma",
  "number": "1.3.6",
  "title": "Elements of order <span class=\"process-math\">\\(k\\)<\/span> bound.",
  "body": " Elements of order bound   Let be a prime integer, and let be a positive integer. The number of elements of of order is either or .    If there are no elements of of order , then we are done. Otherwise, let have order . It follows that each of the elements satisfies , or equivalently . Since the polynomial has coefficients in the field , and has degree equal to , has at most roots. We conclude that the roots of are precisely the elements of . In particular, any other element of order must be of the form for some . Since , we see that has order if and only if . We conclude that there are precisely elements of of order .   "
},
{
  "id": "th_primitive_roots",
  "level": "2",
  "url": "s_primitive_roots.html#th_primitive_roots",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "Primitive roots modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Primitive roots modulo   Let be a prime integer. For each positive integer , let be the set of elements of of order .   If , then .    If , then .    In particular, , and thus there is a primitive root of : , there is an element satisfying .          We know from that for all . Thus, if , then there is no element of order . Equivalently, for all .    For each positive divisor of we know from that . In particular, we have for all . Furthermore, since the sets are disjoint (an element of has a unique order), and since (every element of has order for some divisor of ), we have . From we also know that . Subtracting these two equalities, we conclude that . Since for all positive , we conclude that for all positive . But a sum of nonnegative numbers is zero if and only if each number is zero. Thus we conclude that for all positive .    From (2), we conclude that . Since is positive, we conclude that there is an element of order . (In fact there are precisely such elements.) Such an element satisfies and hence is a primitive root.      "
},
{
  "id": "eg_prim_roots_",
  "level": "2",
  "url": "s_primitive_roots.html#eg_prim_roots_",
  "type": "Example",
  "number": "1.3.8",
  "title": "Primitive roots modulo <span class=\"process-math\">\\(17\\)<\/span>.",
  "body": " Primitive roots modulo   Let be the set of elements of of order .   Find a primitive root of .    List all possible orders of elements of .    For each possible order , enumerate the elements of described as powers of .          "
},
{
  "id": "ss_sage_examples-2",
  "level": "2",
  "url": "s_primitive_roots.html#ss_sage_examples-2",
  "type": "Sage example",
  "number": "3",
  "title": "Primitive roots.",
  "body": " Primitive roots  The Sage function primitive_root(n) returns a primitive root of if one exists, and raises an error otherwise. Furthermore, if is prime, then primitive_root(p) returns the smallest positive integer such that is a primitive root of .     "
},
{
  "id": "sage_unit_group",
  "level": "2",
  "url": "s_primitive_roots.html#sage_unit_group",
  "type": "Sage example",
  "number": "4",
  "title": "Structure of unit group modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Structure of unit group modulo  Once we have created a modular ring R=Integers(n) , we can explore the structure of the unit group using G=R.unit_groups() .   Notice that the description of is not precisely what we expected. Sage is describing abstractly as a cyclic group of cardinality . It has obscured the origins of this group as a subset of . Let's see what the elements of look like in Sage.   It appears Sage has realized as the cyclic group generated by an element it calls . Sage has not actually forgotten the humble beginnings of , as the method f.value() reveals.   Aha! We now see that corresponds to the element in . The Sage group object has additional useful methods. For example, produces a list of all subgroups of , which in our language is the list of the distinct cyclic subgroups as we let vary over .   Note that once again, Sage describes these subgroups in terms of the element . To reminder ourselves of what is here, we can use the .gen() method, followed by the .value() method. For the list comprehension below, we need to exclude the trivial subgroup at the end. Do you see how we did this?   "
},
{
  "id": "s_primitive_root_n",
  "level": "1",
  "url": "s_primitive_root_n.html",
  "type": "Section",
  "number": "1.4",
  "title": "Existence of primitive roots",
  "body": " Existence of primitive roots     Determine the set of positive integers for which there is a primitive root modulo .      Primitive roots modulo  Let's begin with the main result we wish to prove.   Primitive roots modulo   Let be a positive integer. There is a primitive root for if and only if one of the following conditions holds:    ;     for some odd prime and positive integer ;     for some odd prime and positive integer .       Our lead-up to the proof of this theorem will include a sequence of results that are interesting in their own right, and which bring further nuance to the question of primitive roots. In a little more detail, we will be using what might be described as lifting arguments that take a primitive root modulo in and try to lift it to a primitive root modulo higher powers . As such we will be making use of the maps you treated in a recent homework.   Primitive roots modulo , odd   Let be an ood prime. If is a primitive root of , then either or is a primitive root of .    Recall that . In your homework, you proved that the function is well-defined and satisfies for all . Assume is a primitive root modulo , and let . Since , it follows from the properties above that , and thus thus that ( ). Since furthermore , we have ( ). Since , it follows that or . In the latter case, is a primitive root modulo , and we are done.  Assume now that . We show in this case that has order , and hence is a primitvie root modulo . Let . Since , we know that , and hence, using our same reasoning as above, that . It thus suffices to show that . For this we use the binomial theorem: , since . It follows that , as desired.     Primitive root modulo , odd   Let be an odd prime, and let . If is a primitive root modulo , then is a primitive root modulo .  In particular, has a primitive root for all positive integers .    Let be a primitive root modulo , and let for . The same reasoning as in shows that , and thus that for some . To show that , it then suffices to show that : this is because . We finish the proof by showing that for all : or equivalently, that . The proof is by induction. The base case follows trivially, since is assumed to be a primitive root modulo .  For the induction step, we assume that and that , and we must show that . Since , we know that and hence that for some . Since , we have . But then we have . In the penultimate line above, we have used the fact that for all . Show this for yourself: you will notice that we need at some point!    The next proposition investigates the structure of for . As a negative result, it implies that there is no primitive root for for such , since every element has order at most  . On the other hand, it also indicates that the element has order and almost generated the entire unit group.   Primitive roots for ,   Let .    for all . As a result, there is no primitive root for .    The element has order . Every element in can we written uniquely in the form for some .          Done in discussion section. (Or see text.)    Statement about order done in discussion section. (Or see text.) The second statement is left as a homework exercise.       The next proposition, in combination with the previous results, completes the proof of .   Remaining cases for primitive roots   Let be a positive integer.   If with an odd prime, then has a primitive root.    If is not of the form , , or , where is an odd prime, then does not have a primitive root.       This is left as a homework exercise.     "
},
{
  "id": "s_primitive_root_n-2",
  "level": "2",
  "url": "s_primitive_root_n.html#s_primitive_root_n-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   Determine the set of positive integers for which there is a primitive root modulo .    "
},
{
  "id": "th_primitive_roots_mod_n",
  "level": "2",
  "url": "s_primitive_root_n.html#th_primitive_roots_mod_n",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "Primitive roots modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Primitive roots modulo   Let be a positive integer. There is a primitive root for if and only if one of the following conditions holds:    ;     for some odd prime and positive integer ;     for some odd prime and positive integer .      "
},
{
  "id": "prop_prim_mod_psquared",
  "level": "2",
  "url": "s_primitive_root_n.html#prop_prim_mod_psquared",
  "type": "Proposition",
  "number": "1.4.2",
  "title": "Primitive roots modulo <span class=\"process-math\">\\(p^2\\text{,}\\)<\/span> <span class=\"process-math\">\\(p\\)<\/span> odd.",
  "body": " Primitive roots modulo , odd   Let be an ood prime. If is a primitive root of , then either or is a primitive root of .    Recall that . In your homework, you proved that the function is well-defined and satisfies for all . Assume is a primitive root modulo , and let . Since , it follows from the properties above that , and thus thus that ( ). Since furthermore , we have ( ). Since , it follows that or . In the latter case, is a primitive root modulo , and we are done.  Assume now that . We show in this case that has order , and hence is a primitvie root modulo . Let . Since , we know that , and hence, using our same reasoning as above, that . It thus suffices to show that . For this we use the binomial theorem: , since . It follows that , as desired.   "
},
{
  "id": "prop_prim_mod_primepower",
  "level": "2",
  "url": "s_primitive_root_n.html#prop_prim_mod_primepower",
  "type": "Proposition",
  "number": "1.4.3",
  "title": "Primitive root modulo <span class=\"process-math\">\\(p^k\\text{,}\\)<\/span><span class=\"process-math\">\\(p\\)<\/span> odd.",
  "body": " Primitive root modulo , odd   Let be an odd prime, and let . If is a primitive root modulo , then is a primitive root modulo .  In particular, has a primitive root for all positive integers .    Let be a primitive root modulo , and let for . The same reasoning as in shows that , and thus that for some . To show that , it then suffices to show that : this is because . We finish the proof by showing that for all : or equivalently, that . The proof is by induction. The base case follows trivially, since is assumed to be a primitive root modulo .  For the induction step, we assume that and that , and we must show that . Since , we know that and hence that for some . Since , we have . But then we have . In the penultimate line above, we have used the fact that for all . Show this for yourself: you will notice that we need at some point!   "
},
{
  "id": "prop_primitive_power_of_2",
  "level": "2",
  "url": "s_primitive_root_n.html#prop_primitive_power_of_2",
  "type": "Proposition",
  "number": "1.4.4",
  "title": "Primitive roots for <span class=\"process-math\">\\(2^k\\text{,}\\)<\/span> <span class=\"process-math\">\\(k\\geq 3\\)<\/span>.",
  "body": " Primitive roots for ,   Let .    for all . As a result, there is no primitive root for .    The element has order . Every element in can we written uniquely in the form for some .          Done in discussion section. (Or see text.)    Statement about order done in discussion section. (Or see text.) The second statement is left as a homework exercise.      "
},
{
  "id": "prop_primitive_remaining_cases",
  "level": "2",
  "url": "s_primitive_root_n.html#prop_primitive_remaining_cases",
  "type": "Proposition",
  "number": "1.4.5",
  "title": "Remaining cases for primitive roots.",
  "body": " Remaining cases for primitive roots   Let be a positive integer.   If with an odd prime, then has a primitive root.    If is not of the form , , or , where is an odd prime, then does not have a primitive root.       This is left as a homework exercise.   "
},
{
  "id": "s_quad_resid",
  "level": "1",
  "url": "s_quad_resid.html",
  "type": "Section",
  "number": "1.5",
  "title": "Quadratic residues and <span class=\"process-math\">\\(n\\)<\/span>-th powers",
  "body": " Quadratic residues and -th powers     Describe the -th powers of in terms of a primitive root modulo .    Define the Legendre symbol and derive some preliminary properties.      The -th powers of   -th power   Let be a positive integer, and let be a prime. An element is an -th power if there is an satisfying . We call an -th root of in this case.  Similarly, we say an integer is an -th power modulo if is an -th power in : equivalently, if there is an integer such that . We call an -th root of modulo in this case.     -th powers modulo   Let be a prime, let be a primitive root, and let be a positive integer. Define to be the set of all -th powers in , and let    For all , we have if and only if .    Let . We have . In particular, we have if and only if ; equivalently, is an -th power modulo if and only if .     .          Any element can be written as for some . We have if and only if for some : or equivalently, if and only if for some . Since , we have we have if and only if . Thus is an -th power if and only if there exists such that . From congruence theory from the previous quarter, we know this is true if and only if .    Since by the first part we know that if and only if , to prove the first equality, it suffices to show that . If , then for some , and . For the other inclusion, if , then for some , and thus . Since and , it follows that , as desired.  As for the second equality, since any element satisfies , we have . Since, furthermore, the polynomial has at most roots and , we conclude that .    We have .        Squares modulo   Let be an odd prime. There are exactly squares in . In other words, half of the elements of have square roots in .    This is the special case of .     -th powers modulo   Let . For each positive divisor of , determine the set of -th powers in .    The divisors of are . The element is a primitive root modulo . We will write for simplicity. We have . Let's confirm our answer with Sage.       Quadratic residues   Quadratic residue   Let be an odd prime. An element is a quadratic residue if is a square in (equivalently, if has a square root in ). Similarly, an integer with is a quadratic residue modulo if is a square modulo .     Legendre symbol   Let be an odd prime. Given an integer , we define the Legendre symbol  as . The Legendre symbol (with respect to ) gives rise to a function defined as .     Quadratic residues   Let be an odd prime.   If , then .     for all .     for all with .    Exactly ( , half) of the elements of are quadratic residues modulo .    Euler's criterion   for all .          This is essentially by definition and the observation that if and only if , if and only if .    It is clear that if either of and are divisible by , then . Assume now that and are relatively prime to . Let be a primitive root modulo , and let and . We know that an element is a square if and only if is even. It follows that , . Furthermore, since , we have . We conclude that .    We have , since .    Let . By , we know that is a square if and only if . Since satisfies , and since the only roots of are and , we see that either and , or and . In both cases we have , as desired.        Sum of Legendre symbols   Let be an odd prime. We have .     Square roots of modulo   Let be an odd prime. We have .     "
},
{
  "id": "s_quad_resid-2",
  "level": "2",
  "url": "s_quad_resid.html#s_quad_resid-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "   Describe the -th powers of in terms of a primitive root modulo .    Define the Legendre symbol and derive some preliminary properties.    "
},
{
  "id": "d_nth_power",
  "level": "2",
  "url": "s_quad_resid.html#d_nth_power",
  "type": "Definition",
  "number": "1.5.1",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th power.",
  "body": " -th power   Let be a positive integer, and let be a prime. An element is an -th power if there is an satisfying . We call an -th root of in this case.  Similarly, we say an integer is an -th power modulo if is an -th power in : equivalently, if there is an integer such that . We call an -th root of modulo in this case.   "
},
{
  "id": "th_nth_powers_mod_p",
  "level": "2",
  "url": "s_quad_resid.html#th_nth_powers_mod_p",
  "type": "Theorem",
  "number": "1.5.2",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th powers modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " -th powers modulo   Let be a prime, let be a primitive root, and let be a positive integer. Define to be the set of all -th powers in , and let    For all , we have if and only if .    Let . We have . In particular, we have if and only if ; equivalently, is an -th power modulo if and only if .     .          Any element can be written as for some . We have if and only if for some : or equivalently, if and only if for some . Since , we have we have if and only if . Thus is an -th power if and only if there exists such that . From congruence theory from the previous quarter, we know this is true if and only if .    Since by the first part we know that if and only if , to prove the first equality, it suffices to show that . If , then for some , and . For the other inclusion, if , then for some , and thus . Since and , it follows that , as desired.  As for the second equality, since any element satisfies , we have . Since, furthermore, the polynomial has at most roots and , we conclude that .    We have .      "
},
{
  "id": "cor_squares_mod_p",
  "level": "2",
  "url": "s_quad_resid.html#cor_squares_mod_p",
  "type": "Corollary",
  "number": "1.5.3",
  "title": "Squares modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Squares modulo   Let be an odd prime. There are exactly squares in . In other words, half of the elements of have square roots in .    This is the special case of .   "
},
{
  "id": "eg_nth_powers_mod_13",
  "level": "2",
  "url": "s_quad_resid.html#eg_nth_powers_mod_13",
  "type": "Example",
  "number": "1.5.4",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-th powers modulo <span class=\"process-math\">\\(13\\)<\/span>.",
  "body": " -th powers modulo   Let . For each positive divisor of , determine the set of -th powers in .    The divisors of are . The element is a primitive root modulo . We will write for simplicity. We have . Let's confirm our answer with Sage.    "
},
{
  "id": "d_quad_resid",
  "level": "2",
  "url": "s_quad_resid.html#d_quad_resid",
  "type": "Definition",
  "number": "1.5.5",
  "title": "Quadratic residue.",
  "body": " Quadratic residue   Let be an odd prime. An element is a quadratic residue if is a square in (equivalently, if has a square root in ). Similarly, an integer with is a quadratic residue modulo if is a square modulo .   "
},
{
  "id": "d_legendre_function",
  "level": "2",
  "url": "s_quad_resid.html#d_legendre_function",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Legendre symbol.",
  "body": " Legendre symbol   Let be an odd prime. Given an integer , we define the Legendre symbol  as . The Legendre symbol (with respect to ) gives rise to a function defined as .   "
},
{
  "id": "th_legendre_symbol",
  "level": "2",
  "url": "s_quad_resid.html#th_legendre_symbol",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "Quadratic residues.",
  "body": " Quadratic residues   Let be an odd prime.   If , then .     for all .     for all with .    Exactly ( , half) of the elements of are quadratic residues modulo .    Euler's criterion   for all .          This is essentially by definition and the observation that if and only if , if and only if .    It is clear that if either of and are divisible by , then . Assume now that and are relatively prime to . Let be a primitive root modulo , and let and . We know that an element is a square if and only if is even. It follows that , . Furthermore, since , we have . We conclude that .    We have , since .    Let . By , we know that is a square if and only if . Since satisfies , and since the only roots of are and , we see that either and , or and . In both cases we have , as desired.      "
},
{
  "id": "cor_sum_legendre",
  "level": "2",
  "url": "s_quad_resid.html#cor_sum_legendre",
  "type": "Corollary",
  "number": "1.5.8",
  "title": "Sum of Legendre symbols.",
  "body": " Sum of Legendre symbols   Let be an odd prime. We have .   "
},
{
  "id": "cor_legendre_minus_1",
  "level": "2",
  "url": "s_quad_resid.html#cor_legendre_minus_1",
  "type": "Corollary",
  "number": "1.5.9",
  "title": "Square roots of <span class=\"process-math\">\\(-1\\)<\/span> modulo <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Square roots of modulo   Let be an odd prime. We have .   "
},
{
  "id": "s_quad_resid_gauss",
  "level": "1",
  "url": "s_quad_resid_gauss.html",
  "type": "Section",
  "number": "1.6",
  "title": "Quadratic residues: Gauss’s lemma",
  "body": " Quadratic residues: Gauss's lemma     State and prove Gauss's lemma for computing the Legendre symbol.    Derive a formula for using Gauss's lemma.      Gauss's lemma for quadratic residues   Let be an odd prime, and let be an integer with . Consider the set , and let be the number of elements of that lie in the set . Equivalently, is the number of integers such that the least residue of is greater than . .    Let be the elements of that lie in the set , and let be the remaining elements of . Note that these elements are all distinct, since implies , by cancellation. In particular, we have .  Next, we claim that for each , we have . This is because for all , for some , in which case , and .  In fact, we claim further that . From the discussion above, we know that the inclusion holds. To see that this is in fact an equality, we will show that . Since , it suffices to show that the elements and are pairwise distinct. Since and for all , it suffices to show that for all . We prove this by contradiction. If , where and for some , then we would have . Since is a unit, we conclude that . This is a contradiction since , and thus .  Now that we know that , we conclude that . On the other hand, since the union of the and is the set of all multiples with , we have . We conclude that , and thus , since is a unit. Multiplying both sides by , we conclude that . Euler's criterion ( ) now implies . Since and , it follows that .     Integers in the interval  When discussing , it is helpful to keep in mind that when is prime, and are the nearest integers to the ,which is not an integer. The figure below is a useful one to keep in your mind.   Integers in the interval , odd   Integers in the interval from 1 to p-1       Gauss's lemma: computing   Compute using Gauss's lemma and confirm your answer by brute force.    We work within and drop the brackets. The multiples for are . Two of these lie in the set . Thus . (See xref{fig_gauss_5squaremod11}). Indeed, by inspection we find that in .     Gauss's lemma: computing   Applying Gauss's lemma to determine whether 5 is a square modulo 11      Formula for   Let be an odd prime. We have .    Let . Using , we have , where is the number of multiples of , , that lie in .  We treat two separate cases: and .   Case:  Assume , or equivalently, for some integer . In this case we have , which is divisible by . It follows that there are exactly multiples of in and , and thus that . Since , we see that this exponent is even if and only if , and it is easy to see that this is true if and only if . Since implies or , we conclude that in this case we have .    Case:  Assume , or equivalently, for some integer . In this case is a multiple of , but is not. It follows that there are multiples os lying in and multiples of lying in . We conclude that . Since , we see that this exponent is even if and only if is odd, which is true if and only if . Since implies or , we conclude in this case that .   Since our two cases are exhaustive, we combine them to conclude , or more succinctly, .    "
},
{
  "id": "s_quad_resid_gauss-2",
  "level": "2",
  "url": "s_quad_resid_gauss.html#s_quad_resid_gauss-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "   State and prove Gauss's lemma for computing the Legendre symbol.    Derive a formula for using Gauss's lemma.    "
},
{
  "id": "th_gauss_lemma",
  "level": "2",
  "url": "s_quad_resid_gauss.html#th_gauss_lemma",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Gauss’s lemma for quadratic residues.",
  "body": " Gauss's lemma for quadratic residues   Let be an odd prime, and let be an integer with . Consider the set , and let be the number of elements of that lie in the set . Equivalently, is the number of integers such that the least residue of is greater than . .    Let be the elements of that lie in the set , and let be the remaining elements of . Note that these elements are all distinct, since implies , by cancellation. In particular, we have .  Next, we claim that for each , we have . This is because for all , for some , in which case , and .  In fact, we claim further that . From the discussion above, we know that the inclusion holds. To see that this is in fact an equality, we will show that . Since , it suffices to show that the elements and are pairwise distinct. Since and for all , it suffices to show that for all . We prove this by contradiction. If , where and for some , then we would have . Since is a unit, we conclude that . This is a contradiction since , and thus .  Now that we know that , we conclude that . On the other hand, since the union of the and is the set of all multiples with , we have . We conclude that , and thus , since is a unit. Multiplying both sides by , we conclude that . Euler's criterion ( ) now implies . Since and , it follows that .   "
},
{
  "id": "s_quad_resid_gauss-4",
  "level": "2",
  "url": "s_quad_resid_gauss.html#s_quad_resid_gauss-4",
  "type": "Remark",
  "number": "1.6.2",
  "title": "Integers in the interval <span class=\"process-math\">\\([1,p-1]\\)<\/span>.",
  "body": " Integers in the interval  When discussing , it is helpful to keep in mind that when is prime, and are the nearest integers to the ,which is not an integer. The figure below is a useful one to keep in your mind.   Integers in the interval , odd   Integers in the interval from 1 to p-1     "
},
{
  "id": "eg_quad_res_5_11",
  "level": "2",
  "url": "s_quad_resid_gauss.html#eg_quad_res_5_11",
  "type": "Example",
  "number": "1.6.4",
  "title": "Gauss’s lemma: computing <span class=\"process-math\">\\(\\qr{5}{11}\\)<\/span>.",
  "body": " Gauss's lemma: computing   Compute using Gauss's lemma and confirm your answer by brute force.    We work within and drop the brackets. The multiples for are . Two of these lie in the set . Thus . (See xref{fig_gauss_5squaremod11}). Indeed, by inspection we find that in .   "
},
{
  "id": "fig_gauss_5squaremod11",
  "level": "2",
  "url": "s_quad_resid_gauss.html#fig_gauss_5squaremod11",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": " Gauss's lemma: computing   Applying Gauss's lemma to determine whether 5 is a square modulo 11    "
},
{
  "id": "cor_legend_sym_of_2",
  "level": "2",
  "url": "s_quad_resid_gauss.html#cor_legend_sym_of_2",
  "type": "Corollary",
  "number": "1.6.6",
  "title": "Formula for <span class=\"process-math\">\\(\\qr{2}{p}\\)<\/span>.",
  "body": " Formula for   Let be an odd prime. We have .    Let . Using , we have , where is the number of multiples of , , that lie in .  We treat two separate cases: and .   Case:  Assume , or equivalently, for some integer . In this case we have , which is divisible by . It follows that there are exactly multiples of in and , and thus that . Since , we see that this exponent is even if and only if , and it is easy to see that this is true if and only if . Since implies or , we conclude that in this case we have .    Case:  Assume , or equivalently, for some integer . In this case is a multiple of , but is not. It follows that there are multiples os lying in and multiples of lying in . We conclude that . Since , we see that this exponent is even if and only if is odd, which is true if and only if . Since implies or , we conclude in this case that .   Since our two cases are exhaustive, we combine them to conclude , or more succinctly, .   "
},
{
  "id": "s_quad_resid_recipr",
  "level": "1",
  "url": "s_quad_resid_recipr.html",
  "type": "Section",
  "number": "1.7",
  "title": "Law of quadratic reciprocity",
  "body": " Law of quadratic reciprocity     State and prove the law of quadratic reciprocity.    Use quadratic reciprocity to determine whether a given integer is a square modulo .      Law of quadratic reciprocity   Let and be distinct odd primes. We have .    Before getting to the proof of , we record a simple consequence that is often useful when computing examples.    Let and be distinct odd primes. .     Proof of quadratic reciprocity  Consider . Let . By Gauss's lemma, letting be the distinct elements of and the distinct elements of , we have . Recall also, that in our proof of , we showed that . Let's express the elements of in terms of the division algorithm. For each , we have , where . The value of , is determined by the parity of : that is, its value modulo . To assert something interesting about this, we will compute in two different ways. On the one hand, we have    "
},
{
  "id": "s_quad_resid_recipr-2",
  "level": "2",
  "url": "s_quad_resid_recipr.html#s_quad_resid_recipr-2",
  "type": "Objectives",
  "number": "1.7",
  "title": "",
  "body": "   State and prove the law of quadratic reciprocity.    Use quadratic reciprocity to determine whether a given integer is a square modulo .    "
},
{
  "id": "th_quad_recip",
  "level": "2",
  "url": "s_quad_resid_recipr.html#th_quad_recip",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "Law of quadratic reciprocity.",
  "body": " Law of quadratic reciprocity   Let and be distinct odd primes. We have .   "
},
{
  "id": "cor_quad_recip",
  "level": "2",
  "url": "s_quad_resid_recipr.html#cor_quad_recip",
  "type": "Corollary",
  "number": "1.7.2",
  "title": "",
  "body": "  Let and be distinct odd primes. .   "
},
{
  "id": "s_quad_resid_recipr-6",
  "level": "2",
  "url": "s_quad_resid_recipr.html#s_quad_resid_recipr-6",
  "type": "Proof",
  "number": "1.7.1",
  "title": "Proof of quadratic reciprocity.",
  "body": " Proof of quadratic reciprocity  Consider . Let . By Gauss's lemma, letting be the distinct elements of and the distinct elements of , we have . Recall also, that in our proof of , we showed that . Let's express the elements of in terms of the division algorithm. For each , we have , where . The value of , is determined by the parity of : that is, its value modulo . To assert something interesting about this, we will compute in two different ways. On the one hand, we have   "
},
{
  "id": "s_pseudoprimes",
  "level": "1",
  "url": "s_pseudoprimes.html",
  "type": "Section",
  "number": "1.8",
  "title": "Pseudoprimes",
  "body": " Pseudoprimes   Jacobi symbol   Jacobi symbol   Let be an odd positive integer with prime factorization . Given any integer , we define the Jacobi symbol  as      Jacobi symbol and squares modulo  As we will see below, the Jacobi symbol is a convenient extension of the the Legendre symbol to odd composite moduli that satisfies many of the same algebraic properties. We hasten to add, however, that when is not prime, the Jacobi symbol cannot be used to determine whether a given integer is a square modulo ; that is it is not the case that if and only if is a square modulo for integers relatively prime to . Consider , for example. We have , and yet is not a square modulo , as is easily verified.  However, it is possible to show that if , then is not a square modulo . (Hint: CRT!)    Jacobi symbol   Assume is an odd positive integer.   If , then .     for all integers and .    Given odd positive integer , we have for all integers .    .   Let be an odd positive integer. We have .         Pseudoprimes   Pseudoprimes   Let be an odd positive integer and let be an integer that is relatively prime to .   We say is a pseudoprime to the base if .    We say that is an Euler pseudoprime to the base if .    Let , where is odd. We say is a strong pseudoprime wto the base if one of the following conditions is satisfied:    ;     for some .   When one of the above conditions is satisfied, we say that  passes Miller's test for the base .        Pseudoprimes:      Using logical shorthand: .    If is an odd prime, then passes Miller's test with base for all .    If is a positive composite integer, then is a strong pseudoprime to the base for at most of the integers in .          Left to the reader.    Left to the reader.    See Section 9.4 of Rosen's text for a proof. This is essentially just an application of and the Chinese remainder theorem. In this sense the ideas behind the proof will be familiar enough to you. The necessary inequality calisthenics, however, make the proof somewhat lengthy.        Miller-Rabin probabilistic primality test   Let be an odd positive integer, and let be a sequence of elements chosen randomly from . If is composite, then the probability that passes Miller's test for all of the bases is at most .     Strong pseudoprimes     There are infinitely many strong pseudoprimes (to some base). In fact, you can show that there are infinitely many strong pseudoprimes to the base .    The following observations imply that for reasonably sized integers , applying Miller's test to , , , and is sufficient to determine whether is prime.    is the smallest positive integer that is a strong pseudoprime to the base .     is the smallest positive integer that is a strong pseudoprime to the bases and .     is the smallest positive integer that is a strong pseudoprime to the bases , , and .     is the smallest positive integer that is a strong pseudoprime to the bases , , , and .          "
},
{
  "id": "d_jacobi_symbol",
  "level": "2",
  "url": "s_pseudoprimes.html#d_jacobi_symbol",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Jacobi symbol.",
  "body": " Jacobi symbol   Let be an odd positive integer with prime factorization . Given any integer , we define the Jacobi symbol  as    "
},
{
  "id": "ss_jacobi_symbol-3",
  "level": "2",
  "url": "s_pseudoprimes.html#ss_jacobi_symbol-3",
  "type": "Remark",
  "number": "1.8.2",
  "title": "Jacobi symbol and squares modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": " Jacobi symbol and squares modulo  As we will see below, the Jacobi symbol is a convenient extension of the the Legendre symbol to odd composite moduli that satisfies many of the same algebraic properties. We hasten to add, however, that when is not prime, the Jacobi symbol cannot be used to determine whether a given integer is a square modulo ; that is it is not the case that if and only if is a square modulo for integers relatively prime to . Consider , for example. We have , and yet is not a square modulo , as is easily verified.  However, it is possible to show that if , then is not a square modulo . (Hint: CRT!)  "
},
{
  "id": "prop_jacobi",
  "level": "2",
  "url": "s_pseudoprimes.html#prop_jacobi",
  "type": "Proposition",
  "number": "1.8.3",
  "title": "Jacobi symbol.",
  "body": " Jacobi symbol   Assume is an odd positive integer.   If , then .     for all integers and .    Given odd positive integer , we have for all integers .    .   Let be an odd positive integer. We have .      "
},
{
  "id": "d_pseudoprimes",
  "level": "2",
  "url": "s_pseudoprimes.html#d_pseudoprimes",
  "type": "Definition",
  "number": "1.8.4",
  "title": "Pseudoprimes.",
  "body": " Pseudoprimes   Let be an odd positive integer and let be an integer that is relatively prime to .   We say is a pseudoprime to the base if .    We say that is an Euler pseudoprime to the base if .    Let , where is odd. We say is a strong pseudoprime wto the base if one of the following conditions is satisfied:    ;     for some .   When one of the above conditions is satisfied, we say that  passes Miller's test for the base .      "
},
{
  "id": "th_pseudoprimes_fermat_strong",
  "level": "2",
  "url": "s_pseudoprimes.html#th_pseudoprimes_fermat_strong",
  "type": "Theorem",
  "number": "1.8.5",
  "title": "Pseudoprimes:.",
  "body": " Pseudoprimes:      Using logical shorthand: .    If is an odd prime, then passes Miller's test with base for all .    If is a positive composite integer, then is a strong pseudoprime to the base for at most of the integers in .          Left to the reader.    Left to the reader.    See Section 9.4 of Rosen's text for a proof. This is essentially just an application of and the Chinese remainder theorem. In this sense the ideas behind the proof will be familiar enough to you. The necessary inequality calisthenics, however, make the proof somewhat lengthy.      "
},
{
  "id": "proc_primality_prob",
  "level": "2",
  "url": "s_pseudoprimes.html#proc_primality_prob",
  "type": "Procedure",
  "number": "1.8.6",
  "title": "Miller-Rabin probabilistic primality test.",
  "body": " Miller-Rabin probabilistic primality test   Let be an odd positive integer, and let be a sequence of elements chosen randomly from . If is composite, then the probability that passes Miller's test for all of the bases is at most .   "
},
{
  "id": "ss_pseudoprimes-5",
  "level": "2",
  "url": "s_pseudoprimes.html#ss_pseudoprimes-5",
  "type": "Remark",
  "number": "1.8.7",
  "title": "Strong pseudoprimes.",
  "body": " Strong pseudoprimes     There are infinitely many strong pseudoprimes (to some base). In fact, you can show that there are infinitely many strong pseudoprimes to the base .    The following observations imply that for reasonably sized integers , applying Miller's test to , , , and is sufficient to determine whether is prime.    is the smallest positive integer that is a strong pseudoprime to the base .     is the smallest positive integer that is a strong pseudoprime to the bases and .     is the smallest positive integer that is a strong pseudoprime to the bases , , and .     is the smallest positive integer that is a strong pseudoprime to the bases , , , and .        "
},
{
  "id": "s_pyth_trips",
  "level": "1",
  "url": "s_pyth_trips.html",
  "type": "Section",
  "number": "1.9",
  "title": "Pythagorean triples",
  "body": " Pythagorean triples     Introduce the notion of a diophantine equations.    Solve the diophantine equation in integers: , describe the set of all Pythagorean triples.    Introduce the rational parametrization of the circle       In its strictest form, a diophantine equation is a polynomial equation with integer coefficients; and solving a diophantine problem consists in finding the integer solutions to a diophantine equation. Both these notions can be relaxed somewhat, however, by replacing integers with rational numbers . In this section we will consider the diophantine problem of finding all integer solutions to the equation , as well as the diophantine problem of finding all rational solutions to the equation .    Pythagorean triples   Pythagorean triple   A Pythagorean triple is a triple of positive integers satisfying the Pythagorean equation .  A primitive Pythagorean triple is a Pythagorean triple that further satisfies .     Primitive Pythagorean triples   Let be a Pythagorean triple.   If , then is a primitive Pythagorean triple.    The following statements are equivalent.    is a primitive Pythagorean triple.    The integers , , and are pairwise relatively prime.    Two of the integers , , and are relatively prime.             We have . Since is a common divisor of , , and , the triple consists of integers and is thus a Pythagorean triple. Lastly, implies .    It is clear that (ii) (iii) and (iii) (i).  To show (i) (ii) we prove the contrapositive: that is, we assume that two of the elements of are not relatively prime, and show that . If , then there is a prime dividing both and . Since , it follows easily that also divides , and hence . Similarly, if is a common prime divisor of and , then since , it follows that also divides and hence that . The case where and are not relatively prime is exactly similar.       From we see that an arbitrary Pythagorean triple is an integer scalar multiple of a primitive Pythagorean triple : , we have for some . For a complete description of Pythagorean triples, it then suffices to describe the primitive Pythagorean triples. This is the content of . The proof of that result requires the following lemma.    Let and be relatively prime positive integers. If is a square, then and are both squares.    Given a prime and positive integer , let be the largest nonnegative integer such that . (Equivalently, tells us the power that is raised to in the prime factorization of . Note that if and only if .) It is easy to show, using the uniqueness of prime factorizations, that a positive integer is a square if and only if is even for all primes . Furthermore, it is easy to show (again using uniqueness of prime factorizations) that for all primes and nonzero integers and .  Assume now that and are relatively prime, and that for some integer . We will show that is even for all primes , showing that is a square. By symmetry, it follows that is also a square. Given any prime , since is a square, is even. Since , and since cannot divide both and , we have either and or and . In either case, is even, as desired.     Primitive Pythagorean triples   Let be a primitive Pythagorean triple with even. There is a unique pair of positive integers satisfying , , such that          "
},
{
  "id": "s_pyth_trips-2",
  "level": "2",
  "url": "s_pyth_trips.html#s_pyth_trips-2",
  "type": "Objectives",
  "number": "1.9",
  "title": "",
  "body": "   Introduce the notion of a diophantine equations.    Solve the diophantine equation in integers: , describe the set of all Pythagorean triples.    Introduce the rational parametrization of the circle     "
},
{
  "id": "s_pyth_trips-3-1",
  "level": "2",
  "url": "s_pyth_trips.html#s_pyth_trips-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diophantine equation diophantine problem "
},
{
  "id": "d_pyth_trip",
  "level": "2",
  "url": "s_pyth_trips.html#d_pyth_trip",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Pythagorean triple.",
  "body": " Pythagorean triple   A Pythagorean triple is a triple of positive integers satisfying the Pythagorean equation .  A primitive Pythagorean triple is a Pythagorean triple that further satisfies .   "
},
{
  "id": "prop_pyth_trip",
  "level": "2",
  "url": "s_pyth_trips.html#prop_pyth_trip",
  "type": "Proposition",
  "number": "1.9.2",
  "title": "Primitive Pythagorean triples.",
  "body": " Primitive Pythagorean triples   Let be a Pythagorean triple.   If , then is a primitive Pythagorean triple.    The following statements are equivalent.    is a primitive Pythagorean triple.    The integers , , and are pairwise relatively prime.    Two of the integers , , and are relatively prime.             We have . Since is a common divisor of , , and , the triple consists of integers and is thus a Pythagorean triple. Lastly, implies .    It is clear that (ii) (iii) and (iii) (i).  To show (i) (ii) we prove the contrapositive: that is, we assume that two of the elements of are not relatively prime, and show that . If , then there is a prime dividing both and . Since , it follows easily that also divides , and hence . Similarly, if is a common prime divisor of and , then since , it follows that also divides and hence that . The case where and are not relatively prime is exactly similar.      "
},
{
  "id": "lem_product_square",
  "level": "2",
  "url": "s_pyth_trips.html#lem_product_square",
  "type": "Lemma",
  "number": "1.9.3",
  "title": "",
  "body": "  Let and be relatively prime positive integers. If is a square, then and are both squares.    Given a prime and positive integer , let be the largest nonnegative integer such that . (Equivalently, tells us the power that is raised to in the prime factorization of . Note that if and only if .) It is easy to show, using the uniqueness of prime factorizations, that a positive integer is a square if and only if is even for all primes . Furthermore, it is easy to show (again using uniqueness of prime factorizations) that for all primes and nonzero integers and .  Assume now that and are relatively prime, and that for some integer . We will show that is even for all primes , showing that is a square. By symmetry, it follows that is also a square. Given any prime , since is a square, is even. Since , and since cannot divide both and , we have either and or and . In either case, is even, as desired.   "
},
{
  "id": "th_pyth_trips",
  "level": "2",
  "url": "s_pyth_trips.html#th_pyth_trips",
  "type": "Theorem",
  "number": "1.9.4",
  "title": "Primitive Pythagorean triples.",
  "body": " Primitive Pythagorean triples   Let be a primitive Pythagorean triple with even. There is a unique pair of positive integers satisfying , , such that        "
},
{
  "id": "s_gauss_int",
  "level": "1",
  "url": "s_gauss_int.html",
  "type": "Section",
  "number": "1.10",
  "title": "Gaussian integers",
  "body": " Gaussian integers     Introduce the complex numbers and define various important operations: , addition, multiplication, conjugation, and norm.    Define the Gaussian integers and relate complex norm to number theoretic questions.      Complex numbers   Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .     Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .   You are justified in wondering what exactly is meant by a formal expression . A more correct formulation would be that a complex number is really just a pair of real numbers that for various reasons we denote as . Since it is somewhat awkward to write a complex number as , we will live with the ambiguity of , and identify complex numbers as pairs of real numbers via the map . To ensure that this is a well-defined bijection between and , we make official when two of our formal expressions are defined to be equal.   Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .    For reasons that will be made more clear below, it is natural to identify the set of real numbers with the set of complex numbers of the form . This is the motivation behind the next definition.   Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .     ensures that the map defines a bijection between and , allowing us to identify complex numbers as pairs of real numbers. This identification in turn gives rise to a visual representation of complex numbers as points in the Cartesian plane , called the complex plane in this context. To make clear that we are using to visualize , we label the horizontal and vertical axes as and .   Complex plane   Complex plane: points     Using our identification , we see that the real numbers are represented geometrically as the -axis of the complex plane. Similarly, the purely imaginary complex numbers are represented geometrically as the the -axis of the complex plane. As you will see, we will get a lot of mileage out of this geometric representation of complex numbers.  Having defined the complex numbers as a set and given this set some geometric content, we now define some essential operations on .   Addition, subtraction, multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex subtraction  We define the additive inverse of , denoted , as , and the difference of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .        Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   (where is real)     (where is purely imaginary)          We have .    We have .    We have .    We have .    We have .        Real arithmetic  As the last example illustrates, the arithmetic interaction of the real numbers with other complex numbers is particularly simple. For example, for any real number and complex number , we have . In particular, given two real numbers and , we have . In other words, the complex arithmetic of the real numbers, considered now as a subset of the complex numbers, behaves exactly as it does considering the real numbers on their own. We summarize this by saying that the operations of complex addition and complex multiplication are extensions of real addition and real multiplication. In this sense we can think of the complex number system as an extension of the real number system. (Using fancier language from abstract algebra, we say that is a ring extension of .)   The next theorem tells us that complex addition and multiplication are just as well-behaved as their real counterparts. More specifically, using some fancy abstract algebra jargon, the theorem asserts that , together with its addition and multiplication operations, constitutes a ring .   Ring axioms   Let be complex numbers.   Addition is associative   .    Addition is commutative   .    Additive identity   .    Additive inverse   .    Multiplication is associative   .    Multiplication is commutative   .    Multiplicative identity   .    Distributivity   .       Each property above follows in a straightforward manner from the definitions of these complex operations in combination with familiar properties of real number arithmetic. We prove (6) below, leaving the rest of the proofs as an exercise.  Let and . We have , as desired.     Real square roots   Show that every real number has a square-root in : , show that there is a satisfying . (By definition, . See .)    We seek such that the complex number satisfies . Since , we see, using , that if and only if . We now endeavor to solve the (quadratic) system of equations above. We proceed in cases with respect to whether is zero, positive or negative. Note first that in all cases, the second equation is true if and only if or .  Case: . In this case, it is clear that the only solution to the system above is . Thus is the only complex square-root of .  Case: . If (to satisfy the second equation), then if and only if , which is impossible since and . Thus we must have , in which case implies . (Note that , the positive square-root of , exists, since is positive.) It follows that has exactly two square-roots in this case: and .  Case: . In this case we cannot have , since the first equation would imply , which is impossible since is negative. Setting , we then see that or . (Again, note that is a well-defined real number since is positive.) We conclude in this case that has exactly two square-roots: and .  We can summarize our analysis above as follows: any has a complex square-root , and in fact we have . Here we have used the fact that .     Adding square-root of to  It follows from our work in that : , is a square-root of . This observation gives rise to a more motivated understanding of the complex number system . Roughly speaking, we can think of as the smallest number system containing and a square-root of that we call . (I say roughly here as I haven't really told you what I mean by a number system, or by the smallest number system.) Furthermore, we can think of the definition of complex multiplication given by as forced upon us: that is, it is the unique multiplication operation on that is associative, commutative, and satisfies .   Our last result tells us that, as in real number arithmetic, all nonzero complex numbers have a multiplicative inverse . Reaching again for some fancy language from abstract algebra, this fact, in conjunction with , means that , like , is a field .   Multiplicative inverses   Let be a nonzero complex number: , or (or both). There is a unique complex number satisfying : namely, .    The fact that is easily verified using the definition of multiplication given by . As for uniqueness, given any other complex number , we have , showing that is the only complex number satisfying this property.     Multiplicative inverses and quotients   Let be a nonzero complex number: , or . The (multiplicative) inverse of , denoted or , is defined as . Given complex numbers with , the quotient of by , denoted , is defined as .     Inverses and quotients   Compute the following complex numbers. Your answer must be expressed in the form , where .    , where                , where and      , where and           Using the formula , we have .    By definition, we have .    Using formula , we see easily that .    It is easy to see that for a real number , we have , and hence .    It is easy to see, in general that for any complex numbers . Thus we have .        Integer powers   Let be an integer.   Case:  Given , we define .    Case:  Given and , we define .    Case:  Given and nonzero , we set where is positive, and define .       The definition of the modulus of a complex number , has a clear connection with our various visualizations of : it is the length of any arrow representation of ; or equivalently, the distance between and ; or equivalently, the norm of , thinking of as a vector.   Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .    For , we have , which is precisely the length of the various arrow representations of .   Visualizing the modulus of   Visualizing the modulus of      Complex numbers of unit length  Observe that is a complex number of unit length if and only if the point lies on the unit circle . Thus we obtain the following nifty complex description of the unit circle: .    Modulus properties   Let and be complex numbers.   Positivity   , and if and only if .    Triangle inequality   .    Triangle inequality variation   .    Components modulus   and .    Multiplicative property   .       As mentioned above, all but the last statement follow directly from elementary linear algebra facts. We give a proof of statement (5). Letting and , we have .    We now introduce complex conjugation, which like the modulus operation has a strong connection to the geometry of the complex plane.   Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .    What is the geometric relationship between and ? Identifying with the point and with the point , we see that can be thought of as the reflection of through the -axis. In other words, the operation of complex conjugation corresponds to reflection through the -axis.   Conjugation as reflection   Conjugation as reflection     You are likely wondering why reflection through the -axis would prove to be useful when considered as an operation on complex numbers. The next theorem is a form of answer to this question, as it illustrates how reflection ( , conjugation) respects the other complex operations, including our new friend the modulus.   Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .       Recall that for any pair we can write for some , and we call and  polar coordinates of the point in this case. These polar coordinates are not unique, but we do have the following fact: if is nonzero, and we have with and , then and for some integer . This leads directly to the following result about complex numbers.   Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .        Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .  If , we define to be the unique satisfying , and we define to be the set of all arguments of . Equivalently, .     Polar form   Find a polar form for the given , and compute and .                     Polar form properties   Let and where .         .     .    If , then .        Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).    Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .             Gaussian integers  We now define the Gaussian integers as the subset of consisting of complex numbers whose real and imaginary components are integers.   Gaussian integers   The Gaussian integers is the subset of defined as .    One particularly useful property of the Gaussian integers is that they are closed under complex addition and multiplication. This means that can be considered as a number system (or ring) of its own. Furthermore, since the complex operations can be viewed as extensions of the corresponding real operations, the addition and multiplication operations of can be viewed as extensions of integer addition and multiplication.   Gaussian integers   Let .  Closed under addition    .    Closed under multiplication   .       Like all number systems, we are interested in the elements of that have a multiplicative inverse within .   Units of   An element is a unit (or is invertible ) if there exists a satisfying . We denote by the set of all units in .    As a first example of the utility of the modulus function, we give an elegant proof of the fact that .   Units of   The units of are and . In other words, .    The modulus function will also be useful in our analysis of the question of which integers can be expressed as a sum of squares.   Sum of squares   Let be a positive integer. The following statements are equivalent.    for some integers and .     factors as for some .     for some .        Products of sums of squares   If and are integers that can be written as a sum of two squares of integers, then can be written as a sum of two squares of integers.         "
},
{
  "id": "s_gauss_int-2",
  "level": "2",
  "url": "s_gauss_int.html#s_gauss_int-2",
  "type": "Objectives",
  "number": "1.10",
  "title": "",
  "body": "   Introduce the complex numbers and define various important operations: , addition, multiplication, conjugation, and norm.    Define the Gaussian integers and relate complex norm to number theoretic questions.    "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_gauss_int.html#d_complex_numbers",
  "type": "Definition",
  "number": "1.10.1",
  "title": "Complex numbers, real and imaginary parts.",
  "body": " Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .   "
},
{
  "id": "ss_complex_numbers-3",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-3",
  "type": "Notation",
  "number": "1.10.2",
  "title": "Complex numbers.",
  "body": " Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .  "
},
{
  "id": "d_complex_equality",
  "level": "2",
  "url": "s_gauss_int.html#d_complex_equality",
  "type": "Definition",
  "number": "1.10.3",
  "title": "Complex equality.",
  "body": " Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .   "
},
{
  "id": "d_real_imaginary",
  "level": "2",
  "url": "s_gauss_int.html#d_real_imaginary",
  "type": "Definition",
  "number": "1.10.4",
  "title": "Real and imaginary numbers.",
  "body": " Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .   "
},
{
  "id": "ss_complex_numbers-8",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex plane "
},
{
  "id": "fig_complex_plane",
  "level": "2",
  "url": "s_gauss_int.html#fig_complex_plane",
  "type": "Figure",
  "number": "1.10.5",
  "title": "",
  "body": " Complex plane   Complex plane: points    "
},
{
  "id": "d_sum_product",
  "level": "2",
  "url": "s_gauss_int.html#d_sum_product",
  "type": "Definition",
  "number": "1.10.6",
  "title": "Addition, subtraction, multiplication.",
  "body": " Addition, subtraction, multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex subtraction  We define the additive inverse of , denoted , as , and the difference of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .      "
},
{
  "id": "eg_arithmetic",
  "level": "2",
  "url": "s_gauss_int.html#eg_arithmetic",
  "type": "Example",
  "number": "1.10.7",
  "title": "Complex arithmetic.",
  "body": " Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   (where is real)     (where is purely imaginary)          We have .    We have .    We have .    We have .    We have .      "
},
{
  "id": "ss_complex_numbers-14",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-14",
  "type": "Remark",
  "number": "1.10.8",
  "title": "Real arithmetic.",
  "body": " Real arithmetic  As the last example illustrates, the arithmetic interaction of the real numbers with other complex numbers is particularly simple. For example, for any real number and complex number , we have . In particular, given two real numbers and , we have . In other words, the complex arithmetic of the real numbers, considered now as a subset of the complex numbers, behaves exactly as it does considering the real numbers on their own. We summarize this by saying that the operations of complex addition and complex multiplication are extensions of real addition and real multiplication. In this sense we can think of the complex number system as an extension of the real number system. (Using fancier language from abstract algebra, we say that is a ring extension of .)  "
},
{
  "id": "th_ring_ops",
  "level": "2",
  "url": "s_gauss_int.html#th_ring_ops",
  "type": "Theorem",
  "number": "1.10.9",
  "title": "Ring axioms.",
  "body": " Ring axioms   Let be complex numbers.   Addition is associative   .    Addition is commutative   .    Additive identity   .    Additive inverse   .    Multiplication is associative   .    Multiplication is commutative   .    Multiplicative identity   .    Distributivity   .       Each property above follows in a straightforward manner from the definitions of these complex operations in combination with familiar properties of real number arithmetic. We prove (6) below, leaving the rest of the proofs as an exercise.  Let and . We have , as desired.   "
},
{
  "id": "eg_square_roots",
  "level": "2",
  "url": "s_gauss_int.html#eg_square_roots",
  "type": "Example",
  "number": "1.10.10",
  "title": "Real square roots.",
  "body": " Real square roots   Show that every real number has a square-root in : , show that there is a satisfying . (By definition, . See .)    We seek such that the complex number satisfies . Since , we see, using , that if and only if . We now endeavor to solve the (quadratic) system of equations above. We proceed in cases with respect to whether is zero, positive or negative. Note first that in all cases, the second equation is true if and only if or .  Case: . In this case, it is clear that the only solution to the system above is . Thus is the only complex square-root of .  Case: . If (to satisfy the second equation), then if and only if , which is impossible since and . Thus we must have , in which case implies . (Note that , the positive square-root of , exists, since is positive.) It follows that has exactly two square-roots in this case: and .  Case: . In this case we cannot have , since the first equation would imply , which is impossible since is negative. Setting , we then see that or . (Again, note that is a well-defined real number since is positive.) We conclude in this case that has exactly two square-roots: and .  We can summarize our analysis above as follows: any has a complex square-root , and in fact we have . Here we have used the fact that .   "
},
{
  "id": "ss_complex_numbers-18",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-18",
  "type": "Remark",
  "number": "1.10.11",
  "title": "Adding square-root of <span class=\"process-math\">\\(-1\\)<\/span> to <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Adding square-root of to  It follows from our work in that : , is a square-root of . This observation gives rise to a more motivated understanding of the complex number system . Roughly speaking, we can think of as the smallest number system containing and a square-root of that we call . (I say roughly here as I haven't really told you what I mean by a number system, or by the smallest number system.) Furthermore, we can think of the definition of complex multiplication given by as forced upon us: that is, it is the unique multiplication operation on that is associative, commutative, and satisfies .  "
},
{
  "id": "th_mult_inv",
  "level": "2",
  "url": "s_gauss_int.html#th_mult_inv",
  "type": "Theorem",
  "number": "1.10.12",
  "title": "Multiplicative inverses.",
  "body": " Multiplicative inverses   Let be a nonzero complex number: , or (or both). There is a unique complex number satisfying : namely, .    The fact that is easily verified using the definition of multiplication given by . As for uniqueness, given any other complex number , we have , showing that is the only complex number satisfying this property.   "
},
{
  "id": "d_mult_inv",
  "level": "2",
  "url": "s_gauss_int.html#d_mult_inv",
  "type": "Definition",
  "number": "1.10.13",
  "title": "Multiplicative inverses and quotients.",
  "body": " Multiplicative inverses and quotients   Let be a nonzero complex number: , or . The (multiplicative) inverse of , denoted or , is defined as . Given complex numbers with , the quotient of by , denoted , is defined as .   "
},
{
  "id": "eg_inverses",
  "level": "2",
  "url": "s_gauss_int.html#eg_inverses",
  "type": "Example",
  "number": "1.10.14",
  "title": "Inverses and quotients.",
  "body": " Inverses and quotients   Compute the following complex numbers. Your answer must be expressed in the form , where .    , where                , where and      , where and           Using the formula , we have .    By definition, we have .    Using formula , we see easily that .    It is easy to see that for a real number , we have , and hence .    It is easy to see, in general that for any complex numbers . Thus we have .      "
},
{
  "id": "d_integer_powers",
  "level": "2",
  "url": "s_gauss_int.html#d_integer_powers",
  "type": "Definition",
  "number": "1.10.15",
  "title": "Integer powers.",
  "body": " Integer powers   Let be an integer.   Case:  Given , we define .    Case:  Given and , we define .    Case:  Given and nonzero , we set where is positive, and define .      "
},
{
  "id": "d_modulus",
  "level": "2",
  "url": "s_gauss_int.html#d_modulus",
  "type": "Definition",
  "number": "1.10.16",
  "title": "Complex modulus.",
  "body": " Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .   "
},
{
  "id": "fig_modulus",
  "level": "2",
  "url": "s_gauss_int.html#fig_modulus",
  "type": "Figure",
  "number": "1.10.17",
  "title": "",
  "body": " Visualizing the modulus of   Visualizing the modulus of    "
},
{
  "id": "ss_complex_numbers-28",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-28",
  "type": "Remark",
  "number": "1.10.18",
  "title": "Complex numbers of unit length.",
  "body": " Complex numbers of unit length  Observe that is a complex number of unit length if and only if the point lies on the unit circle . Thus we obtain the following nifty complex description of the unit circle: .  "
},
{
  "id": "th_modulus",
  "level": "2",
  "url": "s_gauss_int.html#th_modulus",
  "type": "Theorem",
  "number": "1.10.19",
  "title": "Modulus properties.",
  "body": " Modulus properties   Let and be complex numbers.   Positivity   , and if and only if .    Triangle inequality   .    Triangle inequality variation   .    Components modulus   and .    Multiplicative property   .       As mentioned above, all but the last statement follow directly from elementary linear algebra facts. We give a proof of statement (5). Letting and , we have .   "
},
{
  "id": "d_conj",
  "level": "2",
  "url": "s_gauss_int.html#d_conj",
  "type": "Definition",
  "number": "1.10.20",
  "title": "Complex conjugation.",
  "body": " Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .   "
},
{
  "id": "fig_conj",
  "level": "2",
  "url": "s_gauss_int.html#fig_conj",
  "type": "Figure",
  "number": "1.10.21",
  "title": "",
  "body": " Conjugation as reflection   Conjugation as reflection    "
},
{
  "id": "th_conj",
  "level": "2",
  "url": "s_gauss_int.html#th_conj",
  "type": "Theorem",
  "number": "1.10.22",
  "title": "Conjugation properties.",
  "body": " Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .      "
},
{
  "id": "th_polar_form",
  "level": "2",
  "url": "s_gauss_int.html#th_polar_form",
  "type": "Theorem",
  "number": "1.10.23",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number.   We have for some nonnegative and . The choice of here is unique; in fact, we have .    If and we have for , then for some integer .      "
},
{
  "id": "d_polar",
  "level": "2",
  "url": "s_gauss_int.html#d_polar",
  "type": "Definition",
  "number": "1.10.24",
  "title": "Polar form.",
  "body": " Polar form   Let be a complex number, and suppose and satisfy . We call the expression a polar form of and we call an argument of .  If , we define to be the unique satisfying , and we define to be the set of all arguments of . Equivalently, .   "
},
{
  "id": "eg_polar",
  "level": "2",
  "url": "s_gauss_int.html#eg_polar",
  "type": "Example",
  "number": "1.10.25",
  "title": "Polar form.",
  "body": " Polar form   Find a polar form for the given , and compute and .                   "
},
{
  "id": "th_polar_mult",
  "level": "2",
  "url": "s_gauss_int.html#th_polar_mult",
  "type": "Theorem",
  "number": "1.10.26",
  "title": "Polar form properties.",
  "body": " Polar form properties   Let and where .         .     .    If , then .      "
},
{
  "id": "ss_complex_numbers-41",
  "level": "2",
  "url": "s_gauss_int.html#ss_complex_numbers-41",
  "type": "Remark",
  "number": "1.10.27",
  "title": "Geometric interpretation of complex operations.",
  "body": " Geometric interpretation of complex operations  Each of the identities of can be understood as providing a geometric interpretation of one of our complex operations.  In particular, statement (3) provides us with a more satisfying description of complex multiplication than the algebraic formula given by . Roughly speaking, the identity tells us that to multiply two complex numbers, we (a) add their arguments and (b) multiply their moduli.  Alternatively, tells us that to multiply by , we (a) rotate (considered as a point) by an angle about the origin, and (b) scale its distance from the origin by .  Similarly, tells us that the inverse of a complex number is obtained by taking the reciprocal of its modulus (the in the formula), and flipping its argument (the in the formula).  "
},
{
  "id": "eg_polar_form_",
  "level": "2",
  "url": "s_gauss_int.html#eg_polar_form_",
  "type": "Example",
  "number": "1.10.28",
  "title": "Polar form arithmetic.",
  "body": " Polar form arithmetic   Let and . Compute the following complex numbers. Your answer should be expressed in polar form.    .     .          "
},
{
  "id": "d_gauss_int",
  "level": "2",
  "url": "s_gauss_int.html#d_gauss_int",
  "type": "Definition",
  "number": "1.10.29",
  "title": "Gaussian integers.",
  "body": " Gaussian integers   The Gaussian integers is the subset of defined as .   "
},
{
  "id": "prop_gauss_int",
  "level": "2",
  "url": "s_gauss_int.html#prop_gauss_int",
  "type": "Proposition",
  "number": "1.10.30",
  "title": "Gaussian integers.",
  "body": " Gaussian integers   Let .  Closed under addition    .    Closed under multiplication   .      "
},
{
  "id": "d_gauss_int_units",
  "level": "2",
  "url": "s_gauss_int.html#d_gauss_int_units",
  "type": "Definition",
  "number": "1.10.31",
  "title": "Units of <span class=\"process-math\">\\(\\Z[i]\\)<\/span>.",
  "body": " Units of   An element is a unit (or is invertible ) if there exists a satisfying . We denote by the set of all units in .   "
},
{
  "id": "prop_units_gauss_int",
  "level": "2",
  "url": "s_gauss_int.html#prop_units_gauss_int",
  "type": "Proposition",
  "number": "1.10.32",
  "title": "Units of <span class=\"process-math\">\\(\\Z[i]\\)<\/span>.",
  "body": " Units of   The units of are and . In other words, .   "
},
{
  "id": "prop_sum_of_squares",
  "level": "2",
  "url": "s_gauss_int.html#prop_sum_of_squares",
  "type": "Proposition",
  "number": "1.10.33",
  "title": "Sum of squares.",
  "body": " Sum of squares   Let be a positive integer. The following statements are equivalent.    for some integers and .     factors as for some .     for some .      "
},
{
  "id": "cor_sum_of_squares",
  "level": "2",
  "url": "s_gauss_int.html#cor_sum_of_squares",
  "type": "Corollary",
  "number": "1.10.34",
  "title": "Products of sums of squares.",
  "body": " Products of sums of squares   If and are integers that can be written as a sum of two squares of integers, then can be written as a sum of two squares of integers.       "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples and Sage cells",
  "body": " Examples and Sage cells   "
},
{
  "id": "appendix-vids",
  "level": "1",
  "url": "appendix-vids.html",
  "type": "Appendix",
  "number": "E",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
