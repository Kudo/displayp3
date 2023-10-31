import ExpoModulesCore

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class p3colorView: ExpoView {
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    if self.traitCollection.displayGamut == .P3 {
      backgroundColor = UIColor.init(displayP3Red: 1.0, green: 0, blue: 0, alpha: 1.0)
    } else {
      backgroundColor = UIColor.init(red: 1.0, green: 0, blue: 0, alpha: 1.0)
    }
  }
}
