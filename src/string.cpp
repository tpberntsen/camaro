inline void title_case(std::string& str) {
  std::for_each(str.begin(), str.end(), [](char& c) {
    static int last = ' ';
    if (last == ' ' && c != ' ' && ::isalpha(c)) c = ::toupper(c);
    last = c;
  });
}

inline void lower(std::string& str) {
  std::for_each(str.begin(), str.end(), [](char& c) { c = ::tolower(c); });
}

inline void upper(std::string& str) {
  std::for_each(str.begin(), str.end(), [](char& c) { c = ::toupper(c); });
}