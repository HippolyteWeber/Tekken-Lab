export default function NavBar() {
  return (
    <div className="navbar bg-base-100 font-body size-42 border border-cardColor">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Tekken Lab</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Support</a>
          </li>
          <li>
            <details>
              <summary>Catégories</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
