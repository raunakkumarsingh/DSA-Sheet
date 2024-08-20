// Author: Raunak Kumar Singh
#include <bits/stdc++.h>
using namespace std;

#ifndef ONLINE_JUDGE
#define debug(x) cerr << #x <<" "; _print(x); cerr << endl;
#else
#define debug(x)
#endif
#define pi (3.141592653589)
#define mod 1000000007
#define pb push_back
#define is insert
#define mp make_pair
#define ff first
#define ss second
#define all(x) x.begin(), x.end()
#define min3(a, b, c) min(c, min(a, b))
#define min4(a, b, c, d) min(d, min(c, min(a, b)))
#define rfr(n) for(int i=n-1;i>=0;i--)
#define rep1(i,a,b) for(long long i=a;i<=b;i++)
#define fr(n) for(long long i=0;i<n;i++)
#define nesfr(x,y) for(long long i=0;i<x;i++)for(long long j=0;j<y;j++)
#define rep(i,a,b) for(long long i=a;i<b;i++)
#define fast ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
typedef long long int ll;
typedef long double ld;
typedef vector<ll> vi;
#define nl cout << "\n"
const unsigned int M = 1000000007;
const int  N = 2e5 + 5;

//Input Output Template
template <typename T> istream& operator>>(istream& istream, vector<T>& v){for (auto& it : v)cin >> it;return istream;} //input vector<int> v by cin>>v;
template <typename T1, typename T2> istream& operator>>(istream& istream, pair<T1, T2>& p){return (istream >> p.first >> p.second);} // input pair<int,int> p by cin>>p;
template <typename T1, typename T2> ostream& operator<<(ostream& ostream, const pair<T1, T2>& p){return (ostream << p.first << " " << p.second);}//output pair<int,int> p by cin>>p;
template <typename T> ostream& operator<<(ostream& ostream, const vector<T>& c){for (auto& it : c)cout << it << " ";return ostream;} //output vector<int> v by cin>>v;

//Debugger Function
void _print(ll t) {cerr << t;}
void _print(string t) {cerr << t;}
void _print(char t) {cerr << t;}
void _print(double t) {cerr << t;}
void _print(int t) {cerr << t;}

//Debugger Template
template <class T, class V> void _print(pair <T, V> p);
template <class T> void _print(vector <T> v);
template <class T> void _print(set <T> v);
template <class T, class V> void _print(map <T, V> v);
template <class T> void _print(multiset <T> v);
template <class T, class V> void _print(pair <T, V> p) {cerr << "{"; _print(p.ff); cerr << ","; _print(p.ss); cerr << "}";}
template <class T> void _print(vector <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(set <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(multiset <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T, class V> void _print(map <T, V> v) {cerr << "[ "; for (auto i : v) {_print(i); cerr << " ";} cerr << "]";}


/*------------------------------FUNCTIONS-------------------------------------*/
ll add(ll x,ll y){ll res = x+y;return (res>=mod? res-mod:res);}
ll mul(ll x,ll y){ll res = x*y;return (res>=mod? res%mod:res);}
ll sub(ll x,ll y){ll res = x-y;return (res<0?res+mod:res);}
ll lcm(ll x,ll y){ll res = (x*y)/__gcd(x,y);return res;}
ll gcd(ll x,ll y){if(y==0) return x;return gcd(y,x%y);}
ll power(ll x,ll y){ll res = 1;x%=mod ;while(y){if(y&1)res = mul(res,x);y>>=1;x = mul(x,x);}return res;}
ll mod_inv(ll n) {return power(n,mod-2);}
template<class T> void swap(T *a,T *b){int *temp;temp = a; a = b; b = temp;}
/*----------------------------------------------------------------------------*/

 //MODULAR Function
// long long modAdd(long long a, long long b) { return (a % mod + b % mod) % mod; }
// long long modSubtract(long long a, long long b) { return ((a % mod - b % mod) + mod) % mod; }
// long long modProduct(long long a, long long b) { return (a % mod * b % mod) % mod; }
// ll modpow(ll x, ll n, ll m ){ if (x == 0 && n == 0)return 0;ll res = 1;while (n > 0){if (n % 2)res=(res * x) % m;x=(x*x) % m;n/=2;}return res;}

mt19937 rng(chrono::steady_clock::now().time_since_epoch().count());
template < typename T > T getRand(T l, T r){ uniform_int_distribution<T> uid(l, r);	return uid(rng);}
#define oset tree<int, null_type,less<int>, rb_tree_tag,tree_order_statistics_node_update>

//prime sieve
 vector<ll> sieve(int n) {int*arr = new int[n + 1]();vector<ll> vect;for (int i = 2; i <= n; i++) if(arr[i] == 0) {vect.push_back(i); for (int j = 2 * i; j <= n; j += i) arr[j] = 1;} return vect;}



 void solve(){
    ll n;
    cin>>n;
     vector<ll> vec(n);
     cin>>vec;

     





    

 }

int main()
{
    fast;
    ll t = 1;
    cin >> t;
    while (t--)
    {
      solve();
    }
    return 0;
}
